#!/bin/bash
#Takes one parameter - the Jenkins baseurl.
#Outputs the number of locked ArtifactArchiver threads
wget ${1}/threadDump --quiet -o - | grep "ArtifactArchiver/checkArtifacts" -c
