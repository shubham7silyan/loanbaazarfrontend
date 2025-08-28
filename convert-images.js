const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp').default || require('imagemin-webp');
const path = require('path');
const fs = require('fs');

async function convertToWebP() {
    try {
        console.log('🚀 Starting WebP conversion...');
        
        const files = await imagemin(['src/component/images/*.{jpg,jpeg,png}'], {
            destination: 'src/component/images',
            plugins: [
                imageminWebp({
                    quality: 80,
                    method: 6 // Better compression
                })
            ]
        });

        console.log('✅ Conversion completed!');
        files.forEach(file => {
            const originalSize = fs.statSync(file.sourcePath).size;
            const newSize = file.data.length;
            const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
            
            console.log(`📦 ${path.basename(file.sourcePath)} → ${path.basename(file.destinationPath)}`);
            console.log(`   Size: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB (${savings}% smaller)`);
        });

        console.log('\n🎯 Next steps:');
        console.log('1. Update your React components to use .webp files');
        console.log('2. Add fallback support for browsers that don\'t support WebP');
        
    } catch (error) {
        console.error('❌ Error converting images:', error);
    }
}

convertToWebP();
