"use strict";
exports.id = 624;
exports.ids = [624];
exports.modules = {

/***/ 9944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Contact = ()=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        phone: ""
    });
    const [statusMessage, setStatusMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const validateEmail = (email)=>{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
        const validatePhone = (phone)=>{
            const phoneRegex = /^[0-9\b]+$/;
            return phoneRegex.test(phone) && phone.length === 9;
        };
        const validateMessage = (message)=>{
            return message.length >= 10;
        };
        // walidacja tutaj...
        let errors = {
            email: "",
            phone: "",
            message: ""
        };
        if (!validateEmail(email)) {
            errors.email = "Niepoprawny format e-mail";
        }
        if (!validatePhone(phone)) {
            errors.phone = "Niepoprawny format numeru telefonu";
        }
        if (!validateMessage(message)) {
            errors.message = "Wiadomość musi mieć co najmniej 10 znak\xf3w";
        }
        setErrors(errors);
        if (errors.email === "" && errors.phone === "" && errors.message === "") {
            try {
                let url = window.location.hostname === "www.fusionweldwood.pl" ? "https://www.fusionweldwood.pl/api/send" : "https://fusionweldwood.pl/api/send";
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        phone,
                        message
                    })
                });
                if (!response.ok) {
                    throw new Error("Błąd sieci!");
                }
                const data = await response.json() // teraz `data` to obiekt JSON
                ;
                setStatusMessage(data.message) // Ustawienie komunikatu o sukcesie
                ;
            // tutaj możesz zrobić coś z odpowiedzią...
            } catch (error) {
                console.error("Błąd:", error);
                setStatusMessage("Wystąpił błąd podczas wysyłania wiadomości") // Ustawienie komunikatu o błędzie
                ;
            }
        }
    };
    const messageStyle = {
        color: statusMessage === "Wiadomość wysłana pomyślnie" ? "greenyellow" : "#ed2e2e"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "section contacts",
            id: "contact",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "kontakt"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "underline"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "sectioncontacts",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "phones",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "tele",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/telephone.png",
                                            alt: "znaczek słuchawki od telefonu"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "tel:692798993",
                                            children: "692 798 993"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/telephone.png",
                                            alt: "znaczek słuchawki od telefonu",
                                            style: {
                                                marginTop: 10
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "tel:603796839",
                                            children: "603 796 839"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://www.facebook.com/fusionweldwood",
                                    className: "sm",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/img/Facebook.png",
                                            alt: "ikonka facebooka"
                                        }),
                                        " Facebook"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "contact",
                                name: "myform",
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Formularz kontaktowy:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "contact__form-box",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "email",
                                            name: "Email",
                                            id: "mail",
                                            placeholder: "Tw\xf3j e-mail",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "errori",
                                        children: errors.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: errors.email
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "contact__form-box",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            name: "Number",
                                            id: "number",
                                            placeholder: "Tw\xf3j nr telefonu",
                                            value: phone,
                                            onChange: (e)=>setPhone(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "errori",
                                        children: errors.phone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: errors.phone
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "contact__form-box",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            name: "Message",
                                            id: "msg",
                                            cols: "30",
                                            rows: "10",
                                            placeholder: "Twoja wiadomość",
                                            value: message,
                                            onChange: (e)=>setMessage(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "errori",
                                        children: errors.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: errors.message
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "status-message",
                                        style: messageStyle,
                                        children: [
                                            statusMessage,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flexbtn",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            name: "Login",
                                            value: "submit",
                                            className: "border",
                                            children: "Wyślij"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.215120459124!2d19.544946717443846!3d50.45571870000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471719af40f7b093%3A0xeeff28f399dc4685!2sFusion%20Weld%20%26%20Wood%20Artur%20Kijas!5e0!3m2!1spl!2spl!4v1649758959408!5m2!1spl!2spl",
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "other-links",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/meble-ogrodzieniec",
                            children: "Meble Ogrodzieniec"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/schody-ogrodzieniec",
                            children: "Schody Ogrodzieniec"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/balustrady-ogrodzieniec",
                            children: "Balustrady Ogrodzieniec"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/bramy-i-ogrodzenia-ogrodzieniec",
                            children: "Bramy i ogrodzenia Ogrodzieniec"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/meble-zawiercie",
                            children: "Meble Zawiercie"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/schody-zawiercie",
                            children: "Schody Zawiercie"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/balustrady-zawiercie",
                            children: "Balustrady Zawiercie"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/bramy-i-ogrodzenia-zawiercie",
                            children: "Bramy i ogrodzenia Zawiercie"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        " ",
                        "\xa9 2023 | FUSION WELD & WOOD",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "created by: majkus.dev"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 3909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Nav = ()=>{
    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleNavToggle = ()=>setNavOpen(!navOpen);
    const handleDropdownToggle = ()=>setDropdownOpen(!dropdownOpen);
    const handleCloseNav = ()=>setNavOpen(false);
    const handleScroll = ()=>{
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `navmobile-list ${scrollPosition > 20 ? "shrink" : ""}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "navmobitem",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "img/logofww.jpg",
                                        alt: "logo firmy fusion weld wood na urządzenia mobilne",
                                        className: "logo"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "FUSION WELD & WOOD"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "nav",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "burger",
                                    onClick: handleNavToggle,
                                    children: navOpen ? "X" : "☰"
                                }),
                                navOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `navMenu ${navOpen ? "slideIn" : "slideOut"}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "navItem",
                                            onClick: handleDropdownToggle,
                                            children: [
                                                "Oferta i realizacje",
                                                dropdownOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "dropdown",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/meble-loftowe",
                                                            onClick: handleCloseNav,
                                                            children: "Meble loftowe"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/schody",
                                                            onClick: handleCloseNav,
                                                            children: "Schody"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/balustrady",
                                                            onClick: handleCloseNav,
                                                            children: "Balustrady"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/bramy-i-ogrodzenia",
                                                            onClick: handleCloseNav,
                                                            children: "Bramy i ogrodzenia"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "#reviews",
                                            className: "navItem",
                                            onClick: handleCloseNav,
                                            children: "Opinie"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "#contact",
                                            className: "navItem",
                                            onClick: handleCloseNav,
                                            children: "Kontakt"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "logoinnav",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/img/logonav.jpg"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: `navdesktop-list ${scrollPosition > 20 ? "shrink" : ""}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "img/logofww.jpg",
                                        alt: "logo firmy fusion weld wood na urządzenia desktopowe",
                                        className: "logo"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "FUSION WELD & WOOD"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/#realization",
                            className: "nav-itemlink",
                            children: "OFERTA I REALIZACJE"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "#reviews",
                            className: "nav-itemlink",
                            children: "OPINIE"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "#contact",
                            className: "nav-itemlink",
                            children: "KONTAKT"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ 487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Reviews)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const reviews = [
    // tutaj przechowujemy informacje o recenzjach
    {
        image: "img/oliwia.jpg",
        altText: "twarz klientki oliwi kt\xf3ra napisała opinie",
        text: "Z całego serca polecam! Profesjonalna i rzetelna firma. Schody nie dość że świetnej jakości to jeszcze pełnią funkcję dekoracyjną. Jeśli ktoś ma wątpliwości, nie ma się nad czym zastanawiać. ☺️",
        name: "Oliwia"
    },
    {
        image: "img/gruca.jpg",
        altText: "twarz klienta michała kt\xf3ra napisała opinie",
        text: "Polecam na 100%. Profesjonalne wykonanie barierek, ceny bardzo przyzwoite.",
        name: "Michał"
    },
    {
        image: "img/marta.jpg",
        altText: "twarz klientki marty kt\xf3ra napisała opinie",
        text: "Polecam serdecznie firmę! Fachowa obsługa, profesjonalne podejście do klienta. Usługa na 5!",
        name: "Marta"
    },
    {
        image: "img/daniel.jpg",
        altText: "twarz klienta daniela kt\xf3ra napisała opinie",
        text: "Fachowa robota! Panowie punktualni i profesjonalni. POLECAM!",
        name: "Daniel"
    },
    {
        image: "img/dagmara.jpg",
        altText: "twarz klientki dagmary kt\xf3ra napisała opinie",
        text: "Polecam! Profesjonalna i rzetelna firma! Stały kontakt! a efekt? fantastyczny!",
        name: "Dagmara"
    },
    {
        image: "img/dominika.jpg",
        altText: "twarz klientki dominiki kt\xf3ra napisała opinie",
        text: "Profesjonalizm, stały kontakt z klientem, barierki super zrobione i szybko zamontowane, bardzo polecam \uD83D\uDE42",
        name: "Dominika"
    }
];
const ReviewBox = ({ image, altText, text, name })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "reviews__box",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "reviews__box-img",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: image,
                    alt: altText
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "reviews__box-info",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "reviews__box-quote",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-quote-right"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "reviews__box-text",
                        children: text
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: name
                    })
                ]
            })
        ]
    });
// const Reviews = () => {
// 	return (
// 		<>
// 			<section className='section reviews' id='reviews'>
// 				<div className='py-4'>
// 					<h2>Opinie</h2>
// 					<div className='underline'></div>
// 					<div className='wrapper'>
// 						<div className='reviews__boxes'>
// 							</div>
// 						</div>
// 					</div>
// 			</section>
// 		</>
// 	)
// }
// export default Reviews
function Reviews() {
    const [visibleReviews, setVisibleReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const handleShowMore = ()=>{
        setVisibleReviews(reviews.length);
    };
    const handleShowLess = ()=>{
        setVisibleReviews(1);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "section reviews",
            id: "reviews",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Opinie"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "underline"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "wrapper",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "reviews__boxes",
                            children: [
                                reviews.slice(0, visibleReviews).map((review, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewBox, {
                                        ...review
                                    }, index)),
                                visibleReviews < reviews.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "buttons-fam",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleShowMore,
                                        className: "buttons-reviews",
                                        children: "Pokaż więcej"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "buttons-fam",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleShowLess,
                                        className: "buttons-reviews",
                                        children: "Schowaj opinie"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;