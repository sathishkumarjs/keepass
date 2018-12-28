     function startIntro(){
        var intro = introJs();
          intro.setOptions({
            steps: [
               {
                element: "#imgstep1",
                intro: "Download the latest version of KeePass from <strong>https://keepass.info/download.html</strong>. Based on your Operating System choose the installer.",
                position: "top"
              },
              {
                element: "#imgstep35",
                intro: "<strong>Install KeePass</strong> by running the downloaded setup file.",
                position: "top"
              },
              {
                element: "#imgstep10",
                intro: "<strong>Open KeePass Application</strong> and Click on Cancel button to proceed to next step",
                position: "top"
              },
              {
                element: "#imgstep11",
                intro: "Click on new icon to setup your <strong>Password Database</strong>.",
                position: "top"
              },
              {
                element: "#imgstep12",
                intro: "Click on <strong>Ok</strong> button to proceed to next step",
                position: "top"
              },
              {
                element: "#imgstep13",
                intro: "Choose the <strong>Folder and Filename to save your password</strong>, data will get encrypted and stored.",
                position: "top"
              },
              {
                element: "#imgstep14",
                intro: "Enter your <strong>Master password</strong>, this password should be long and strong. This is the only password you should remember to retrieve all your website/Application passwords.",
                position: "top"
              },
              {
                element: "#imgstep15",
                intro: "Notice the <strong>password strength</strong>, higher the number stronger the password.",
                position: "top"
              },
              {
                element: "#imgstep16",
                intro: "click to <strong>Show/Hide</strong> your password",
                position: "top"
              },
              {
                element: "#imgstep17",
                intro: "Make sure to note down your Master password and click on Ok button.",
                position: "top"
              },
              {
                element: "#imgstep18",
                intro: "<strong>Specify name for password database</strong>, example [My Password] or you can leave this blank",
                position: "top"
              },
              {
                element: "#imgstep19",
                intro: "Click on Ok button to proceed. Now your Password Database is ready for <strong>adding new password entries</strong>.",
                position: "top"
              },
              {
                  element: "#imgstep8",
                  intro: "click on Add Key to <strong>create a new password</strong> entry.",
                  position: "top"
              },
              {
                  element: "#imgstep2",
                  intro: "Click on <strong>Generate a Password</strong> icon",
                  position: "top"
              },
              {
                  element: "#imgstep3",
                  intro: "Click on <strong>Open Password Generator</strong>.",
                  position: "top"
              },
              {
                  element: "#imgstep4",
                  intro: "Specify password width based on your website, it is highly recommended to use <strong>minimum of 12 characters</strong>.",
                  position: "top"
              },
              {
                  element: "#imgstep5",
                  intro: "You can change the level of <strong>password complexity</strong> by choosing various options, certain characters cannot be used as part of password in certain websites.",
                  position: "top"
              },
              {
                  element: "#imgstep6",
                  intro: "Click on <strong>preview tab to view generated password</strong>. if you are fine with complexity proceed to next step.",
                  position: "top"
              },
            {
            element: "#imgstep7",
            intro: "Click on <strong>Ok to confirm</strong>",
            position: "top"
            },
            {
            element: "#imgstep21",
            intro: "Provide a friendly <strong>Title</strong> for your website.",
            position: "top"
            },
            {
            element: "#imgstep22",
            intro: "Enter <strong>Username</strong> to be used to register in the website",
            position: "top"
            },
            {
            element: "#imgstep23",
            intro: "Notice the <strong>complex password</strong> got generated.",
            position: "top"
            },
            {
                element: "#imgstep23_1",
                intro: "If you think the generated password is not strong enough, click on <strong>Generate a Password</strong> icon and <strong>follow steps 15 to 19</strong> to generate a new password.",
                position: "top"
            },                
            {
            element: "#imgstep24",
            intro: "Check the Quality of password, <strong>larger number means more complex</strong>.",
            position: "top"
            }
            ,
            {
            element: "#imgstep25",
            intro: "Enter the <strong>website URL used for signup</strong>.",
            position: "top"
            },
            {
            element: "#imgstep26",
            intro: "Click <strong>Ok</strong> to continue",
            position: "top"
            },
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
            intro: "<strong>Paste password</strong> and proceed with sign-in. You can also sign-in to the website automatically, follow next step.",
            position: "top"
            },
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
      
      