#!/bin/bash

TARGET='gl-es-03.soda.sh'
SSHCOMMAND="ssh winterwell@$TARGET"
TARGETDIR='/home/winterwell/my-loop-website'
GITSHORTHAND="git --git-dir=$TARGETDIR/.git/ --work-tree=$TARGETDIR"

echo -e "Telling the server to update it's my-loop-website git repo"
echo -e "> Garbage Collecting..."
$SSHCOMMAND "$GITSHORTHAND gc --prune=now"
echo -e "> Pulling Origin..."
$SSHCOMMAND "$GITSHORTHAND pull origin master"
echo -e "> Resetting Files to version held on github"
$SSHCOMMAND "$GITSHORTHAND reset --hard FETCH_HEAD"
echo -e ""

echo -e "> Optimising Images..."
$SSHCOMMAND "optipng $TARGETDIR/webroot/img/*.png"
$SSHCOMMAND "jpegoptim $TARGETDIR/webroot/img/*.jpg"
$SSHCOMMAND "jpegoptim $TARGETDIR/webroot/img/*.jpeg"
echo -e ""

echo -e "> Converting Markdown to HTML..."
$SSHCOMMAND 'cd /home/winterwell/jerbil/ && java -cp jerbil.jar:lib/* Jerbil /home/winterwell/my-loop-website'
echo -e ""

echo -e "My-Loop Website has now been updated"
