SHELL = /bin/sh
.DEFAULT_GOAL := all

BUILDDIR := build/
GUIBUILDDIR := $(BUILDDIR)gui/
GUI_ASSET_DIR := $(GUIBUILDDIR)assets/
# The RAWJSFILES file list ignores files in the assets/javascripts directory and
# instead are copied over without processing manually.
RAWJSFILES := $(shell find app -type f -name '*.js' ! -path "app/assets/javascripts/*")
JS_ASSETS := $(shell find app/assets/javascripts -not -path "app/assets/javascripts")
IMAGE_ASSETS := $(shell find app/assets/images -not -path "app/assets/images")
SVG_ASSETS := $(shell find app/assets/svgs -not -path "app/assets/svgs")
FONT_ASSETS := $(shell find app/assets/fonts -not -path "app/assets/fonts")
BUILT_RAWJSFILES := $(patsubst app/%, $(GUIBUILDDIR)%, $(RAWJSFILES))
MIN_JS_FILES := $(patsubst %.js, %-min.js, $(BUILT_RAWJSFILES))
TEMPLATE_FILES := $(shell find app -type f -name "*.handlebars" -or -name "*.partial")
TEMPLATES_FILE := build/templates.js
LESS_FILES := $(shell find lib/views -type f -name '*.less')
JUJUGUI_CSS_FILE := build/gui/juju-gui.css
STATIC_CSS_FILE := build/gui/all-static.css
SPRITE_FILES := build/gui/sprites.css build/gui/sprites.png

define colorecho
	@tput setaf 2
	@echo $(1)
	@tput sgr0
endef

$(BUILDDIR):
	@echo -n "Generating build directory. "
	@mkdir -p $(BUILDDIR)
	$(call colorecho,"Done.")

$(GUIBUILDDIR): $(BUILDDIR)
	@echo -n "Generating GUI build directory. "
	@mkdir -p $(GUIBUILDDIR)
	$(call colorecho,"Done.")

$(GUI_ASSET_DIR): $(GUIBUILDDIR)
	@echo -n "Generating GUI asset directories. "
	@mkdir -p $(GUI_ASSET_DIR)javascripts
	@mkdir -p $(GUI_ASSET_DIR)images
	@mkdir -p $(GUI_ASSET_DIR)svgs
	@mkdir -p $(GUI_ASSET_DIR)fonts
	$(call colorecho,"Done.")

$(GUIBUILDDIR)%.js: app/%.js
	@echo -n "Creating $^. "
	@mkdir -p $(@D)
	@babel $^ -o $@ --source-maps
	$(call colorecho,"Done.")

$(GUIBUILDDIR)%-min.js: $(GUIBUILDDIR)%.js
	@echo -n "Creating $@. "
	@uglifyjs --screw-ie8 $^ -o $@ --source-map $@.map --in-source-map $^.map
	$(call colorecho,"Done.")

# The same library generates the template and css files so the generateTemplates
# bin will be run twice so that there is a clear upgrade path.
$(TEMPLATES_FILE): $(TEMPLATE_FILES) $(GUIBUILDDIR)
	@echo "Generating templates. "
	@bin/generateTemplates

$(JUJUGUI_CSS_FILE): $(LESS_FILES) $(GUIBUILDDIR)
	@echo -n "Generating Juju GUI css. "
	@bin/generateTemplates
	$(call colorecho,"Done.")

# The merge-files script combines the js and css but we only care about the css
# now. This will need to be split out.
$(STATIC_CSS_FILE): $(GUIBUILDDIR)
	@echo -n "Generating static css. "
	@bin/merge-files
	$(call colorecho,"Done.")

$(SPRITE_FILES): node_modules/grunt node_modules/node-spritesheet $(IMAGE_ASSETS)
	@echo "Generating sprites."
	@node_modules/grunt/bin/grunt spritegen
	$(call colorecho,"Done.")

.PHONY: all
all: $(GUIBUILDDIR) babelize uglify templates assets css sprites

.PHONY: help
help:
	@echo ""
	@echo "Available targets:"
	@echo ""
	@echo "  [no target]   Install all dependencies and build environment"
	@echo "  all           Install all dependencies and build environment"
	@echo "  assets        Copy the assets into the build directory"
	@echo "  check         Run the linters on the code"
	@echo "  clean         Remove compiled code"
	@echo "  clean-all     Remove dependencies and compiled code"
	@echo "  css           Generate the css rollup file"
	@echo "  dist          Create release distribution"
	@echo "  sys-deps      Install system dependencies"
	@echo "  templates     Generate the template rollup file"
	@echo ""

.PHONY: sys-deps
sys-deps:
	@echo "Installing system dependencies."
	sudo apt-get install -y software-properties-common
	sh install-sysdeps.sh
	npm install --cache-min=999999999
	$(call colorecho,"Done.")

.PHONY: templates
templates: $(TEMPLATES_FILE)
	$(call colorecho,"Done.")

.PHONY: babelize
# Required because it takes a long time to spin up for every individual file
babelize: $(GUIBUILDDIR)
	@echo "Running js source files through babeljs. "
	@babel app --source-maps --ignore="app/assets/javascripts/" --out-dir=$(GUIBUILDDIR)
	$(call colorecho,"Done babeljs processing.")

.PHONY: uglify
uglify: $(MIN_JS_FILES)
	$(call colorecho,"Done minifying javascript.")

.PHONY: assets
assets: $(GUI_ASSET_DIR) $(JS_ASSETS)
	@echo -n "Copying JS assets to build directory. "
	@cp -P $(JS_ASSETS) $(GUI_ASSET_DIR)javascripts
	$(call colorecho,"Done.")
	@echo -n "Copying Image assets to build directory. "
	@rsync -a $(IMAGE_ASSETS) $(GUI_ASSET_DIR)images
	$(call colorecho,"Done.")
	@echo -n "Copying SVG assets to build directory. "
	@cp $(SVG_ASSETS) $(GUI_ASSET_DIR)svgs
	$(call colorecho,"Done.")
	@echo -n "Copying Font assets to build directory. "
	@cp $(FONT_ASSETS) $(GUI_ASSET_DIR)fonts
	$(call colorecho,"Done.")

.PHONY: css
css: $(JUJUGUI_CSS_FILE) $(STATIC_CSS_FILE)
	$(call colorecho,"Done generating CSS.")

.PHONY: sprites
sprites: $(SPRITE_FILES)
	$(call colorecho."Done generating sprites.")

.PHONY: devel
devel: $(BUILT_RAWJSFILES) $(MIN_JS_FILES)
	node server.js

.PHONY: check
check:
	# Lint target

.PHONY: clean
clean:
	@echo -n "Removing built files. "
	@rm -rf $(BUILDDIR)
	$(call colorecho,"Done.")

.PHONY: clean-all
clean-all: clean
	@echo "Removing application dependencies and built files."

.PHONY: dist
dist:
	# Create distribution target

