SHELL = /bin/sh
.DEFAULT_GOAL := all

.PHONY: all
all: sysdeps deps
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
	# Clean all target

.PHONY: clean-all
clean-all:
	# Clean-all target

.PHONY: dist
dist:
	# Create distribution target

