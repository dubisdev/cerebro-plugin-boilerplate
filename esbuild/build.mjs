#!/usr/bin/env node

import esbuild from "esbuild";
import esbuildConfig from "../esbuild.config.mjs";

esbuild
  .build({
    format: "cjs",
    target: "es2016",
    minify: true,
    ...esbuildConfig,
  })
  .catch(() => process.exit(1));
