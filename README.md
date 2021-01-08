# download-url-page-html
download the whole html code of web page.
# npm i uuid
# run  in this command in terminal >node download.js http://www.google.com

You would see an output similar to this:

downloading  http://www.google.com
downloading is done in folder  b9697730-9764-11e7-8546-bfe35e924b2c

Open the newly created subfolder in your code editor or even in a browser to view the HTML (the browser view won't be a perfect copy, because there might be missing some CSS dependencies or AJAX/XHR content which is loaded on the fly by the target website but inaccessible by the GET request).

Experiment some more to see that each time you run the node script, the URL is saved into a file named url.txt within the folder and that the html data is saved within file.html:
