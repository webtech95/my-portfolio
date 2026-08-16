(() => {
    /* =========================================
       ELEMENTS
    ========================================= */

    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector("[data-menu-toggle]");
    const navLinks = document.querySelector("[data-nav-links]");
    const backToTop = document.querySelector("[data-back-to-top]");


    /* =========================================
       MOBILE MENU
    ========================================= */

    const closeMenu = () => {
        if (!menuButton || !navLinks) return;

        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                closeMenu();
            }
        });
    }


    /* =========================================
       HEADER + BACK TO TOP
    ========================================= */

    const handleScroll = () => {

        const scrolled = window.scrollY > 18;

        header?.classList.toggle(
            "is-scrolled",
            scrolled
        );

        backToTop?.classList.toggle(
            "is-visible",
            window.scrollY > 560
        );
    };

    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    );

    handleScroll();

    backToTop?.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    /* =========================================
       REVEAL ANIMATIONS
    ========================================= */

    const revealItems =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealItems.forEach((item) => {
            observer.observe(item);
        });

    } else {

        revealItems.forEach((item) => {
            item.classList.add("is-visible");
        });
    }


    /* =========================================
       PROJECT FILTERS
    ========================================= */

    const filters =
        document.querySelectorAll("[data-filter]");

    const cards =
        document.querySelectorAll("[data-category]");

    const filterStatus =
        document.querySelector("[data-filter-status]");

    if (filters.length && cards.length) {

        filters.forEach((filter) => {

            filter.addEventListener("click", () => {

                const selected =
                    filter.dataset.filter;

                let shown = 0;


                filters.forEach((button) => {

                    const active =
                        button === filter;

                    button.classList.toggle(
                        "is-active",
                        active
                    );

                    button.setAttribute(
                        "aria-pressed",
                        String(active)
                    );
                });


                cards.forEach((card) => {

                    const categories =
                        card.dataset.category.split(" ");

                    const matches =
                        selected === "all" ||
                        categories.includes(selected);

                    card.hidden = !matches;

                    if (matches) {
                        shown++;
                    }
                });


                if (filterStatus) {

                    filterStatus.textContent =
                        `Showing ${shown} ${
                            shown === 1
                                ? "project"
                                : "projects"
                        }.`;
                }
            });
        });
    }


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm =
        document.querySelector("[data-contact-form]");

    const formStatus =
        document.querySelector("[data-form-status]");

    contactForm?.addEventListener(
        "submit",
        (event) => {

            if (!contactForm.checkValidity()) {

                event.preventDefault();

                if (formStatus) {
                    formStatus.textContent =
                        "Please complete each field before sending your message.";
                }
            }
        }
    );


    /* =========================================
       CURRENT YEAR
    ========================================= */

    document
        .querySelectorAll("[data-current-year]")
        .forEach((item) => {

            item.textContent =
                new Date().getFullYear();
        });


    /* =========================================
       RESUME MODAL
    ========================================= */

    const resumeModal =
        document.getElementById("resumeModal");

    window.openResume = (event) => {

        event?.preventDefault();

        if (!resumeModal) return;

        resumeModal.classList.add("show");

        document.body.style.overflow = "hidden";
    };


    window.closeResume = () => {

        if (!resumeModal) return;

        resumeModal.classList.remove("show");

        document.body.style.overflow = "";
    };


    if (resumeModal) {

        /* Close when clicking outside */
        resumeModal.addEventListener(
            "click",
            (event) => {

                if (event.target === resumeModal) {
                    window.closeResume();
                }
            }
        );
    }


    /* =========================================
       ESCAPE KEY
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (resumeModal?.classList.contains("show")) {
                    window.closeResume();
                }

                document.body.classList.remove(
                    "cursor-hover"
                );
            }
        }
    );


    /* =========================================
       PREMIUM CUSTOM CURSOR
    ========================================= */

    const cursorDot =
        document.querySelector(".custom-cursor-dot");

    const cursorRing =
        document.querySelector(".custom-cursor-ring");


    /*
       Only initialize cursor if the elements
       exist on the current page.
    */

    if (cursorDot && cursorRing) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;


        /* Mouse position */

        document.addEventListener(
            "mousemove",
            (event) => {

                mouseX = event.clientX;
                mouseY = event.clientY;

                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;
            }
        );


        /* Smooth ring */

        const animateCursor = () => {

            ringX +=
                (mouseX - ringX) * 0.15;

            ringY +=
                (mouseY - ringY) * 0.15;

            cursorRing.style.left =
                `${ringX}px`;

            cursorRing.style.top =
                `${ringY}px`;

            requestAnimationFrame(
                animateCursor
            );
        };

        animateCursor();


        /* Interactive elements */

        const interactiveElements =
            document.querySelectorAll(
                "a, button, input, textarea, select, [role='button']"
            );

        interactiveElements.forEach(
            (element) => {

                element.addEventListener(
                    "mouseenter",
                    () => {
                        document.body.classList.add(
                            "cursor-hover"
                        );
                    }
                );

                element.addEventListener(
                    "mouseleave",
                    () => {
                        document.body.classList.remove(
                            "cursor-hover"
                        );
                    }
                );
            }
        );


        /* Click effect */

        document.addEventListener(
            "mousedown",
            () => {
                document.body.classList.add(
                    "cursor-click"
                );
            }
        );

        document.addEventListener(
            "mouseup",
            () => {
                document.body.classList.remove(
                    "cursor-click"
                );
            }
        );


        /* Hide outside page */

        document.addEventListener(
            "mouseleave",
            () => {
                document.body.classList.add(
                    "cursor-hidden"
                );
            }
        );

        document.addEventListener(
            "mouseenter",
            () => {
                document.body.classList.remove(
                    "cursor-hidden"
                );
            }
        );
    }

})();