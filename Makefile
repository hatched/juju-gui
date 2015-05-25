SHELL = /bin/sh
.DEFAULT_GOAL := all

BUILDDIR := build/
GUIBUILDDIR := build/gui/
RAWJSFILES := $(shell find app -name '*.js')
BUILT_RAWJSFILES := $(patsubst %, $(GUIBUILDDIR)%, $(RAWJSFILES))

$(BUILDDIR):
	mkdir -p $(BUILDDIR)

$(GUIBUILDDIR): $(BUILDDIR)
	mkdir -p $(GUIBUILDDIR)

$(GUIBUILDDIR)%.js: %.js
	mkdir -p $(@D)
	cp $^ $(@D)

.PHONY: all
all: sysdeps deps $(GUIBUILDDIR) $(BUILT_RAWJSFILES)
	# Default target

.PHONY: help
help:
	@echo "Available targets:"
	@echo "[no target] or all: Install all dependencies and build environment"
	@echo "check: Run the linters on the code"
	@echo "clean: Remove compiled code"
	@echo "clean-all: Remove dependencies and compiled code"
	@echo "deps: Install application dependencies"
	@echo "dist: Create release distribution"
	@echo "sys-deps: Install system dependencies"

.PHONY: sysdeps
sysdeps:
	# Install system dependencies

.PHONY: deps
deps:
	# Install application dependencies

.PHONY: check
check:
	# Lint target

.PHONY: clean
clean:
	rm -rf $(BUILDDIR)

.PHONY: clean-all
clean-all:
	# Clean-all target

.PHONY: dist
dist:
	# Create distribution target

