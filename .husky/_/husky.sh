#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "$1"
  }

  readonly hook_name="$(basename "$0")"
  debug "husky > $hook_name"

  readonly git_params="$*"
  export readonly git_params

  sh -e "$0"
fi
