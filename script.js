/* =========================================================
   DAGNAW BEYENE PORTFOLIO
   Main JavaScript
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. WELCOME SCREEN
       ===================================================== */

    var introScreen = document.getElementById("introScreen");
    var enterButton = document.getElementById("introEnterButton");

    var portfolioEntered = false;
    var autoEnterTimer = null;

    function enterPortfolio() {

      if (portfolioEntered) {
        return;
      }

      portfolioEntered = true;

      /* Stop automatic timer */
      if (autoEnterTimer) {
        clearTimeout(autoEnterTimer);
        autoEnterTimer = null;
      }

      /* Remove the class that locks the portfolio */
      document.body.classList.remove("intro-active");

      /* Hide welcome screen with animation */
      if (introScreen) {

        introScreen.classList.add("intro-hide");

        setTimeout(function () {
          introScreen.style.display = "none";
        }, 850);
      }

      /* Go to Home */
      var homeSection = document.getElementById("home");

      if (homeSection) {

        setTimeout(function () {

          homeSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }, 100);
      }
    }

    /*
      VERY IMPORTANT

      index.html uses:

      onclick="window.enterPortfolioNow && window.enterPortfolioNow()"

      Therefore the function MUST be attached to window.
    */

    window.enterPortfolioNow = enterPortfolio;


    /* Button click */

    if (enterButton) {

      enterButton.addEventListener(
        "click",
        enterPortfolio
      );

    }


    /* Automatic entry */

    if (introScreen) {

      autoEnterTimer = setTimeout(
        enterPortfolio,
        4500
      );

    } else {

      document.body.classList.remove(
        "intro-active"
      );

    }


    /* =====================================================
       2. WELCOME LANGUAGE / WORD ROTATION
       ===================================================== */

    var introCycle =
      document.getElementById("introCycle");

    if (introCycle) {

      var welcomeWords = [
        "Welcome",
        "Selam",
        "Baga nagaan dhuftan",
        "欢迎"
      ];

      var wordIndex = 0;

      setInterval(function () {

        if (portfolioEntered) {
          return;
        }

        wordIndex =
          (wordIndex + 1) %
          welcomeWords.length;

        introCycle.textContent =
          welcomeWords[wordIndex];

      }, 1200);
    }


    /* =====================================================
       3. HERO TYPING EFFECT
       ===================================================== */

    var typingText =
      document.getElementById("typingText");

    if (typingText) {

      var roles = [
        "Web Developer",
        "Database Administrator",
        "AI / IoT Explorer",
        "Creative Developer"
      ];

      var roleIndex = 0;
      var characterIndex = 0;
      var deleting = false;


      function typeRole() {

        var currentRole =
          roles[roleIndex];


        /* Typing */

        if (!deleting) {

          characterIndex++;

          typingText.textContent =
            currentRole.substring(
              0,
              characterIndex
            );


          if (
            characterIndex >=
            currentRole.length
          ) {

            deleting = true;

            setTimeout(
              typeRole,
              1500
            );

          } else {

            setTimeout(
              typeRole,
              75
            );

          }

        }

        /* Deleting */

        else {

          characterIndex--;

          typingText.textContent =
            currentRole.substring(
              0,
              characterIndex
            );


          if (characterIndex <= 0) {

            deleting = false;

            roleIndex =
              (roleIndex + 1) %
              roles.length;

            setTimeout(
              typeRole,
              350
            );

          } else {

            setTimeout(
              typeRole,
              45
            );

          }
        }
      }


      typeRole();
    }


    /* =====================================================
       4. SCROLL REVEAL
       ===================================================== */

    var revealElements =
      document.querySelectorAll(
        ".reveal"
      );


    if (
      "IntersectionObserver"
      in window
    ) {

      var revealObserver =
        new IntersectionObserver(
          function (entries) {

            entries.forEach(
              function (entry) {

                if (
                  entry.isIntersecting
                ) {

                  entry.target.classList.add(
                    "visible"
                  );

                  revealObserver.unobserve(
                    entry.target
                  );
                }

              }
            );

          },
          {
            threshold: 0.12,
            rootMargin:
              "0px 0px -40px 0px"
          }
        );


      revealElements.forEach(
        function (element) {

          revealObserver.observe(
            element
          );

        }
      );

    } else {

      revealElements.forEach(
        function (element) {

          element.classList.add(
            "visible"
          );

        }
      );

    }


    /* =====================================================
       5. MOBILE MENU
       ===================================================== */

    var menuToggle =
      document.getElementById(
        "menuToggle"
      );

    var mobileNav =
      document.getElementById(
        "mobileNavPanel"
      );


    function closeMobileMenu() {

      if (
        !menuToggle ||
        !mobileNav
      ) {
        return;
      }

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      mobileNav.classList.remove(
        "open"
      );
    }


    if (
      menuToggle &&
      mobileNav
    ) {

      menuToggle.addEventListener(
        "click",
        function () {

          var isOpen =
            menuToggle.getAttribute(
              "aria-expanded"
            ) === "true";


          menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
          );


          mobileNav.classList.toggle(
            "open",
            !isOpen
          );

        }
      );


      mobileNav
        .querySelectorAll("a")
        .forEach(
          function (link) {

            link.addEventListener(
              "click",
              closeMobileMenu
            );

          }
        );


      document.addEventListener(
        "click",
        function (event) {

          if (
            mobileNav.classList.contains(
              "open"
            ) &&
            !mobileNav.contains(
              event.target
            ) &&
            !menuToggle.contains(
              event.target
            )
          ) {

            closeMobileMenu();

          }

        }
      );
    }


    /* =====================================================
       6. SMOOTH SCROLL LINKS
       ===================================================== */

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(
        function (link) {

          link.addEventListener(
            "click",
            function (event) {

              var targetID =
                link.getAttribute(
                  "href"
                );


              if (
                !targetID ||
                targetID === "#"
              ) {
                return;
              }


              var target =
                document.querySelector(
                  targetID
                );


              if (target) {

                event.preventDefault();


                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });


                if (
                  window.history &&
                  window.history.replaceState
                ) {

                  window.history.replaceState(
                    null,
                    "",
                    targetID
                  );

                }

              }

            }
          );

        }
      );


    /* =====================================================
       7. SCROLL TO TOP BUTTON
       ===================================================== */

    var scrollTopButton =
      document.getElementById(
        "scrollTop"
      );


    if (scrollTopButton) {

      window.addEventListener(
        "scroll",
        function () {

          if (
            window.scrollY > 500
          ) {

            scrollTopButton.classList.add(
              "show"
            );

          } else {

            scrollTopButton.classList.remove(
              "show"
            );

          }

        },
        {
          passive: true
        }
      );


      scrollTopButton.addEventListener(
        "click",
        function () {

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }
      );

    }


    /* =====================================================
       8. CURRENT YEAR
       ===================================================== */

    var currentYear =
      document.getElementById(
        "currentYear"
      );


    if (currentYear) {

      currentYear.textContent =
        new Date().getFullYear();

    }


    /* =====================================================
       9. CONTACT FORM
       ===================================================== */

    var contactForm =
      document.getElementById(
        "contactForm"
      );

    var formMessage =
      document.getElementById(
        "formMessage"
      );


    if (contactForm) {

      contactForm.addEventListener(
        "submit",
        function (event) {

          event.preventDefault();


          var nameField =
            document.getElementById(
              "name"
            );

          var emailField =
            document.getElementById(
              "email"
            );

          var messageField =
            document.getElementById(
              "message"
            );


          var name =
            nameField
              ? nameField.value.trim()
              : "";


          var email =
            emailField
              ? emailField.value.trim()
              : "";


          var message =
            messageField
              ? messageField.value.trim()
              : "";


          if (
            !name ||
            !email ||
            !message
          ) {

            if (formMessage) {

              formMessage.textContent =
                "Please complete all fields.";

            }

            return;
          }


          var subject =
            encodeURIComponent(
              "Portfolio contact from " +
              name
            );


          var body =
            encodeURIComponent(
              "Name: " +
              name +
              "\nEmail: " +
              email +
              "\n\n" +
              message
            );


          window.location.href =
            "mailto:dagnawbeyene5@gmail.com" +
            "?subject=" +
            subject +
            "&body=" +
            body;


          if (formMessage) {

            formMessage.textContent =
              "Opening your email app...";

          }

        }
      );
    }


    /* =====================================================
       10. LANGUAGE SELECTOR
       ===================================================== */

    var languageSelect =
      document.getElementById(
        "languageSelect"
      );


    if (languageSelect) {

      var savedLanguage =
        localStorage.getItem(
          "portfolioLanguage"
        );


      if (
        savedLanguage &&
        Array.from(
          languageSelect.options
        ).some(
          function (option) {

            return (
              option.value ===
              savedLanguage
            );

          }
        )
      ) {

        languageSelect.value =
          savedLanguage;

        document.documentElement.lang =
          savedLanguage;

      }


      languageSelect.addEventListener(
        "change",
        function () {

          var language =
            languageSelect.value;


          localStorage.setItem(
            "portfolioLanguage",
            language
          );


          document.documentElement.lang =
            language;

        }
      );
    }


    /* =====================================================
       11. PROFILE CARD 3D EFFECT
       ===================================================== */

    var profileCard =
      document.getElementById(
        "profileCard"
      );


    if (
      profileCard &&
      window.matchMedia(
        "(pointer:fine)"
      ).matches
    ) {

      profileCard.addEventListener(
        "mousemove",
        function (event) {

          var rect =
            profileCard.getBoundingClientRect();


          var x =
            event.clientX -
            rect.left;


          var y =
            event.clientY -
            rect.top;


          var rotateY =
            ((x / rect.width) - 0.5) *
            10;


          var rotateX =
            ((y / rect.height) - 0.5) *
            -10;


          profileCard.style.transform =
            "perspective(800px) " +
            "rotateX(" +
            rotateX +
            "deg) " +
            "rotateY(" +
            rotateY +
            "deg)";

        }
      );


      profileCard.addEventListener(
        "mouseleave",
        function () {

          profileCard.style.transform =
            "";

        }
      );
    }


    /* =====================================================
       12. KEYBOARD ACCESSIBILITY
       ===================================================== */

    document.addEventListener(
      "keydown",
      function (event) {

        /*
          Press Enter or Space while
          the welcome button is focused.
        */

        if (
          !portfolioEntered &&
          enterButton &&
          document.activeElement ===
            enterButton &&
          (
            event.key === "Enter" ||
            event.key === " "
          )
        ) {

          event.preventDefault();

          enterPortfolio();

        }

      }
    );


    /* =====================================================
       13. PAGE LOAD FAILSAFE
       ===================================================== */

    window.addEventListener(
      "load",
      function () {

        /*
          If the intro somehow remains
          locked after page load, the
          automatic timer above will
          still open it.
        */

        if (!introScreen) {

          document.body.classList.remove(
            "intro-active"
          );

        }

      }
    );

  });

})();
