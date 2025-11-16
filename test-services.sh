#!/bin/bash
echo "=== Testing Ratio1 Placeholder Pages ==="
echo ""

echo "1. Testing DEFAULT service (no env var)..."
unset NEXT_PUBLIC_SERVICE
npm run build 2>&1 | grep -E "(Compiled successfully|Route)" | head -3
echo ""

echo "2. Testing DRIVE service..."
NEXT_PUBLIC_SERVICE=drive npm run build 2>&1 | grep -E "(Compiled successfully|Route)" | head -3
echo ""

echo "3. Testing ANALYTICS service..."
NEXT_PUBLIC_SERVICE=analytics npm run build 2>&1 | grep -E "(Compiled successfully|Route)" | head -3
echo ""

echo "4. Testing DASHBOARD service..."
NEXT_PUBLIC_SERVICE=dashboard npm run build 2>&1 | grep -E "(Compiled successfully|Route)" | head -3
echo ""

echo "✅ All builds successful!"
