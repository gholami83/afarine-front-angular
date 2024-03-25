cd ..;
ng build --source-map --configuration=dev --output-hashing all;
cd dist/afarine-site/assets;
rm -rf mock scss;
cd ..;
rsync -ar -e 'ssh -p 34522' * dev@45.159.150.153:/var/www/afarine
cd ..; 