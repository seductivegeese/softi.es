#!/usr/bin/perl

print "Content-type:text/html\r\n\r\n";
print '<html>';
print '<head>';
print '<title>Softies Deployment</title>';
print '</head>';
print '<body>';

my $result = `git reset HEAD --hard`;
die "Git reset returned $result" unless $result == 0;

my $result = `git pull`;
die "Git returned $result" unless $result == 0;

my $result = `npm install`;
die "Npm returned $result" unless $result == 0;

my $result = `node build.js`;
die "Node returned $result" unless $result == 0;

print "Deployed :)";
print '</body>';
print '</html>';
1;
