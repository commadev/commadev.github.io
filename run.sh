cd /workspace/comma/team/commadev.github.io
bundle exec jekyll build -d des
rm -r /home/comma/webserver/comma/blog
mv /workspace/comma/team/commadev.github.io/des /home/comma/webserver/comma/blog
chmod -R 777 /home/comma/webserver/comma/blog