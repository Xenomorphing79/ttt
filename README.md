# App Overview

The app is a simple web application built using React.js. It fetches the contents of a text file from a remote server, parses the content to find the frequency of occurrence of each word, and displays a histogram of the 20 most occurring words. The app also has an export button that allows users to download the histogram data in CSV format.


## Components
1.  Button Component: This component displays a single button that triggers the fetching and parsing of the text file.
    
2.  Histogram Component: This component displays the histogram of the 20 most occurring words. It uses the D3.js library to generate the histogram.

## External packages used

1.  React: A JavaScript library for building user interfaces.
2.  D3.js: A JavaScript library for visualizing data using HTML, SVG, and CSS.
3.  axios: A JavaScript library for making HTTP requests from the browser or Node.js.
4.  papaparse: A JavaScript library for parsing and converting CSV data.
5.  fs: A built-in Node.js module for working with the file system.
6.  path: A built-in Node.js module for working with file paths.

## Hosting

The app has been hosted on Vercel and can be accessed at the following link:
https://ttt-i2rlpptlf-xenomorphing79.vercel.app/

## Conclusion
In summary, the app is a simple web application built using React.js and Next.js that fetches the contents of a text file, parses the content to find the frequency of occurrence of each word, and displays a histogram of the 20 most occurring words. It also has an export button that allows users to download the histogram data in CSV format. The app uses the D3.js library to generate the histogram and axios and papaparse to fetch and parse the text file, respectively.
