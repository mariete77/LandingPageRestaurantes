#!/bin/bash

# Script para deploy en Vercel
echo "🚀 Preparando deploy en Vercel..."

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI no está instalado"
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Verificar si estamos logueados
if ! vercel whoami &> /dev/null; then
    echo "🔐 Necesitas hacer login en Vercel"
    echo "Ejecuta: vercel login"
    exit 1
fi

echo "✅ Vercel CLI instalado y logueado"
echo ""

echo "📋 Opciones de deploy:"
echo "1. Deploy de desarrollo (preview)"
echo "2. Deploy a producción"
echo "3. Solo construir (sin deploy)"
echo ""

read -p "Selecciona una opción (1-3): " option

case $option in
    1)
        echo "🚀 Iniciando deploy de desarrollo..."
        vercel
        ;;
    2)
        echo "🚀 Iniciando deploy a producción..."
        vercel --prod
        ;;
    3)
        echo "🔨 Construyendo proyecto..."
        npm run build
        echo "✅ Build completado"
        ;;
    *)
        echo "❌ Opción no válida"
        exit 1
        ;;
esac

echo ""
echo "✅ ¡Listo!"
