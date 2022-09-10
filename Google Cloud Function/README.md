# node with Google Cloud
----------------
This is a project first time using Google Cloud in nodejs .

function i doing :
 * Play Video inside GC 
 * Upload file to GC
  
----------------
## Play Video inside GC
For this function actually very easy . 
in html file to play video is use 'video' tag and inside it got source tag like below :

    <video controls>
        <source>
    </video>

we just put the video link in source tag and it will working well .

    <video controls>
        <source src="https://storage.googleapis.com/your-bucket/demo.mp4">
    </video>

----------------
## Upload file to GC
