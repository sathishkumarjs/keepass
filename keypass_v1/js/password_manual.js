function startIntro(){
    var intro = introJs();
      intro.setOptions({
        steps: [
        {
        element: "#imgstep27",
        intro: "Select the generated password <strong>right click</strong> to open the shortcut menu.",
        position: "top"
        },
        {
        element: "#imgstep28",
        intro: "Select <strong>Copy Password</strong>, the copied password will expire in 12 seconds.",
        position: "top"
        },
        {
        element: "#imgstep29",
        intro: "<strong>Paste the password</strong> into your target website.",
        position: "top"
        },
        {
        element: "#imgstep30",
        intro: "Click to confirm registration and signup.",
        position: "top"
        },
        {
        element: "#imgstep31",
        intro: "<strong>Sign-in</strong> to Website using generated Password. Open KeePass, right click on the password entry and click on Copy UserName.",
        position: "top"
        },
        {
        element: "#imgstep33",
        intro: "Open your sign-in page of your website, <strong>paste Username</strong>.",
        position: "top"
        },
        {
        element: "#imgstep32",
        intro: "Open KeePass, right click on the password entry and <strong>click on Copy Password</strong>.",
        position: "top"
        },
        {
        element: "#imgstep34",
        intro: "<strong>Paste password</strong> and proceed with sign-in.",
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
  
  