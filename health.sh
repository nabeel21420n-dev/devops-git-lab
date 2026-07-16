#!/usr/bin/env bash

echo "===== SERVER HEALTH ====="
echo "Hostname: $(hostname)"
echo "User: $(whoami)"
echo
echo "Disk:"
df -h /
echo
echo "Memory:"
free -h
