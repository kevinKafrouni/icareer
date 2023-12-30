function Apply(){
    return(

<html>
  <head>
    <script src="https://unpkg.com/jquery/dist/jquery.min.js"></script>
    <script src="https://unpkg.com/survey-jquery@1.9.123/survey.jquery.min.js"></script>
    <script src="https://unpkg.com/survey-jquery@1.9.123/themes/index.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/survey-jquery@1.9.123/defaultV2.min.css" />
    <link rel="stylesheet" href ="./index.css" />
  </head>
  <body>
    <div id="surveyElement" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;"></div>
    <script src="./json.js"></script>
    <script src="./index.js"></script>
  </body>
</html>

    );
}

export default Apply;
