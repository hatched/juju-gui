SHELL = /bin/sh
.DEFAULT_GOAL := all

BUILDDIR := build/
GUIBUILDDIR := $(BUILDDIR)gui/
RAWJSFILES := $(shell find app -type f -name '*.js' ! -path "app/assets/javascripts/*")
BUILT_RAWJSFILES := $(patsubst %, $(GUIBUILDDIR)%, $(RAWJSFILES))
# -regextype is not supported on OSX, it needs to use -E instead.
TEMPLATE_FILES := $(shell find app -type f -regextype posix-extended -regex '.+\.(handlebars|partial)')
TEMPLATES_FILE := build/templates.js
LESS_FILES := $(shell find lib/views -type f -name '*.less')
CSS_FILE := build/gui/juju-gui.css

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

$(GUIBUILDDIR)%.js: %.js
	@echo -n "Creating $^. "
	@mkdir -p $(@D)
	@babel $^ -o $@
	$(call colorecho,"Done.")

# The same library generates the template and css files so the generateTemplates
# bin will be run twice so that there is a clear upgrade path.
$(TEMPLATES_FILE): $(TEMPLATE_FILES) $(GUIBUILDDIR)
	@echo "Generating templates. "
	@bin/generateTemplates

$(CSS_FILE): $(LESS_FILES) $(GUIBUILDDIR)
	@echo "Generating css. "
	@bin/generateTemplates

.PHONY: all
all: $(GUIBUILDDIR) babelize templates

.PHONY: help
help:
	@echo ""
	@echo "Available targets:"
	@echo ""
	@echo "  [no target]   Install all dependencies and build environment"
	@echo "  all           Install all dependencies and build environment"
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
	babel app --ignore="app/assets/javascripts/" --out-dir=$(GUIBUILDDIR)

.PHONY: css
css: $(CSS_FILE)
	$(call colorecho,"Done.")

.PHONY: devel
devel: $(BUILT_RAWJSFILES)
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

