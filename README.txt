Code for America Drupal 7 Sandbox

This is a demonstration site for playing with Drupal 7. Specifically, playing with and demonstrating cool features in Drupal that might be helpful for cities.

1/21/2011 - This is a very basic Drupal site with the full codebase, some contributed modules, and some custom modules.
The idea is that this exact file structure will be pushed to a server... 
Everything we need minus:
* the settings.php file (sites/default/settings.php) (which is where passwords are stored.)

Notes:
* files directory IS included (sites/default/files)  (typically people do not store large files in git repositories.)
  for our demonstrations, we may have a few smaller pictures.

There are two ways you can install this:
[Draft!]

Requirements
* working webserver (apache, mysql, php)
* having git is helpful, but you can also download these files from github's interface.

These instructions are tailored for creating a Drupal 7 install on your own machine.
You should defer to the drupal.org installation instructions. These instructions are for our particular needs in creating demos of special Drupal 7 features.

* Create a local database on your webserver
* Clone this repository into a folder in your htdocs folder on your webserver.

1. Install Drupal 7 through the interface to generate a new settings.php file
   * Install the current working database:  setup/databases/cfa-drupal7-demo.sql
   * Overwrite your database with the database in the github repository
   * the default login for user/1 is user: admin  password: admin

When you install all these pieces, you will have a working installation of Drupal that has some pre-loaded content & special configurations.

