function startIntro(){
    var intro = introJs();
      intro.setOptions({
        steps: [
        {
        element: "#imgstep36",
        intro: "Right click on the Password entry and <strong>select Edit/View entry</strong>.",
        position: "top"
        },
        {
        element: "#imgstep37",
        intro: "Click on <strong>Auto-Type</strong> Tab",
        position: "top"
        },
        {
        element: "#imgstep38",
        intro: "Click on <strong>Override default sequence</strong>, this action will allow you to <strong>edit the sequence of Automatic Key entry</strong>.",
        position: "top"
        },
        {
        element: "#imgstep39",
        intro: "Google.com sigin is 2 page process. {USERNAME} & {PASSWORD} in different pages. In this case <strong>{USERNAME}{ENTER}{PASSWORD}{ENTER}</strong> keystroke will automatically sign-in to the mail.",
        position: "top"
        },
        {
        element: "#imgstep40",
        intro: "Click on <strong>OK to save</strong> the changes.",
        position: "top"
        },
        {
          element: "#imgstep33",
          intro: "<strong>To complete auto sign-in</strong>, in the browser window open Google mail sign-in page.",
          position: "top"
        },
        {
          element: "#imgstep41",
          intro: "RIght click on the password entry and <strong>click Perform Auto-type</strong>, you will notice Username and password associated with the Gmail account automatically sign-in.",
          position: "top"
        }

          ]
      });
      intro.start();
  }
  startIntro();
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
  
  