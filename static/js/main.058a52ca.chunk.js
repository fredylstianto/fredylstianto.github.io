(this["webpackJsonpdevelopers-portfolio"] = this["webpackJsonpdevelopers-portfolio"] || []).push([
    [0], {
        112: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                r = t.n(n),
                l = t(29),
                s = t.n(l),
                c = (t(83), t(51)),
                i = t(6),
                o = !0,
                m = {
                    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
                    firstName: "Fredy",
                    middleName: "",
                    lastName: "Liestianto",
                    message: " Passionate about gaming and technology. ",
                    icons: [{
                        image: "fa-github",
                        url: "https://github.com/fredylstianto"
                    }, {
                        image: "fa-facebook",
                        url: "https://www.facebook.com/"
                    }, {
                        image: "fa-instagram",
                        url: "https://www.facebook.com/"
                    }]
                },
                u = {
                    show: !0,
                    heading: "About Me",
                    imageLink: t(49),
                    imageSize: 375,
                    message: "My name is Fredy Liestianto, My Nickname in game is Fate. I\u2019m studied at Tarumanagara University at Jakarta with a degree in Information Technology. I'm most passionate about gaming and giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like playing game and working on open source projects.",
                    resume: t(56)
                },
                d = {
                    show: !0,
                    heading: "Recent Projects",
                    gitHubUsername: "fredylstianto",
                    reposLength: 4,
                    specificRepos: []
                },
                f = {
                    show: !1,
                    heading: "Leadership",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
                    images: [{
                        img: t(49),
                        label: "First slide label",
                        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
                    }, {
                        img: t(49),
                        label: "Second slide label",
                        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
                    }],
                    imageSize: {
                        width: "615",
                        height: "450"
                    }
                },
                g = {
                    show: !0,
                    heading: "Skills",
                    hardSkills: [{
                        name: "Python",
                        value: 70
                    }, {
                        name: "SQL",
                        value: 75
                    }, {
                        name: "Data Structures",
                        value: 85
                    }, {
                        name: "C/C++",
                        value: 75
                    }, {
                        name: "JavaScript",
                        value: 90
                    }, {
                        name: "React",
                        value: 65
                    }, {
                        name: "HTML/CSS",
                        value: 95
                    }, {
                        name: "C#",
                        value: 65
                    }],
                    softSkills: [{
                        name: "Goal-Oriented",
                        value: 85
                    }, {
                        name: "Collaboration",
                        value: 70
                    }, {
                        name: "Positivity",
                        value: 95
                    }, {
                        name: "Adaptability",
                        value: 85
                    }, {
                        name: "Problem Solving",
                        value: 85
                    }, {
                        name: "Empathy",
                        value: 90
                    }, {
                        name: "Organization",
                        value: 70
                    }, {
                        name: "Creativity",
                        value: 90
                    }]
                },
                p = !0,
                h = "Get In Touch",
                b = "I'm currently looking for friends! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
                v = "fredyliestianto@gmail.com",
                E = t(68),
                k = t.n(E),
                w = t(24),
                y = t(38),
                N = r.a.forwardRef((function(e, a) {
                    var t = e.gradient,
                        n = e.title,
                        l = e.message,
                        s = e.icons;
                    return r.a.createElement(y.a, {
                        fluid: !0,
                        id: "home",
                        style: {
                            background: "linear-gradient(136deg,".concat(t, ")"),
                            backgroundSize: "1200% 1200%"
                        },
                        className: "title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
                    }, r.a.createElement("div", {
                        id: "stars"
                    }), r.a.createElement(w.a, {
                        className: "text-center"
                    }, r.a.createElement("h1", {
                        ref: a,
                        className: "display-1"
                    }, n), r.a.createElement(k.a, {
                        className: "lead typist",
                        cursor: {
                            show: !1
                        }
                    }, " ", l), r.a.createElement("div", {
                        className: "p-5"
                    }, s.map((function(e, a) {
                        return r.a.createElement("a", {
                            key: "social-icon-".concat(a),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: e.url,
                            "aria-label": "My ".concat(e.image.split("-")[1])
                        }, r.a.createElement("i", {
                            className: "fab ".concat(e.image, "  fa-3x socialicons")
                        }))
                    }))), r.a.createElement("a", {
                        className: "btn btn-outline-light btn-lg ",
                        href: "#aboutme",
                        role: "button",
                        "aria-label": "Learn more about me"
                    }, "More about me")))
                })),
                S = t(17),
                x = t.n(S),
                j = t(25),
                _ = t(8),
                O = (t(56), t(21)),
                L = t.n(O),
                C = new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
                R = function(e) {
                    var a = e.heading,
                        t = e.message,
                        n = e.link,
                        l = e.imgSize,
                        s = e.resume,
                        c = r.a.useState(""),
                        i = Object(_.a)(c, 2),
                        o = i[0],
                        m = i[1],
                        u = r.a.useState(Boolean(n)),
                        d = Object(_.a)(u, 2),
                        f = d[0],
                        g = d[1];
                    r.a.useEffect((function() {
                        n && !C.test(n) ? p() : m(n)
                    }), [n]);
                    var p = function() {
                        var e = Object(j.a)(x.a.mark((function e() {
                            var a;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return "https://www.instagram.com/", "/?__a=1", e.prev = 2, e.next = 5, L.a.get("https://www.instagram.com/" + n + "/?__a=1");
                                    case 5:
                                        a = e.sent, m(a.data.graphql.user.profile_pic_url_hd), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), g(!1), console.error(e.t0.message);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 9]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return r.a.createElement("div", {
                        id: "aboutme",
                        className: "jumbotron jumbotron-fluid m-0"
                    }, r.a.createElement("div", {
                        className: "container container-fluid"
                    }, r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: "col-5 d-none d-lg-block align-self-center"
                    }, f && r.a.createElement("img", {
                        className: "border border-secondary rounded-circle",
                        src: o,
                        alt: "profilepicture",
                        width: l,
                        height: l
                    })), r.a.createElement("div", {
                        className: "col-lg-".concat(f ? "7" : "12")
                    }, r.a.createElement("h2", {
                        className: "display-4 mb-5 text-center"
                    }, a), r.a.createElement("p", {
                        className: "lead text-center"
                    }, t), s && r.a.createElement("p", {
                        className: "lead text-center"
                    }, r.a.createElement("a", {
                        className: "btn btn-outline-dark btn-lg",
                        href: s,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        role: "button",
                        "aria-label": "Resume/CV"
                    }, "Resume"))))))
                },
                z = t(69),
                P = t(77),
                T = t(33),
                I = t(32),
                F = t(37),
                M = t(30),
                A = t.n(M),
                B = function(e) {
                    var a = e.svn_url;
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
                        href: "".concat(a, "/archive/master.zip"),
                        className: "btn btn-outline-secondary mr-3"
                    }, r.a.createElement("i", {
                        className: "fab fa-github"
                    }), " Clone Project"), r.a.createElement("a", {
                        href: a,
                        target: " _blank",
                        className: "btn btn-outline-secondary"
                    }, r.a.createElement("i", {
                        className: "fab fa-github"
                    }), " Repo"))
                },
                W = function(e) {
                    var a = e.languages_url,
                        t = e.repo_url,
                        l = Object(n.useState)([]),
                        s = Object(_.a)(l, 2),
                        c = s[0],
                        i = s[1],
                        o = Object(n.useCallback)(Object(j.a)(x.a.mark((function e() {
                            var t;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, L.a.get(a);
                                    case 3:
                                        return t = e.sent, e.abrupt("return", i(t.data));
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0.message);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [a]);
                    Object(n.useEffect)((function() {
                        o()
                    }), [o]);
                    var m = [],
                        u = 0;
                    for (var d in c) m.push(d), u += c[d];
                    return r.a.createElement("div", {
                        className: "pb-3"
                    }, "Languages:", " ", m.length ? m.map((function(e) {
                        return r.a.createElement("a", {
                            key: e,
                            className: "badge badge-light card-link",
                            href: t + "/search?l=".concat(e),
                            target: " _blank"
                        }, e, ":", " ", Math.trunc(c[e] / u * 1e3) / 10, " %")
                    })) : "code yet to be deployed.")
                },
                q = function(e) {
                    var a = e.star_count,
                        t = e.repo_url,
                        l = e.pushed_at,
                        s = Object(n.useState)("0 mints"),
                        c = Object(_.a)(s, 2),
                        i = c[0],
                        o = c[1],
                        m = Object(n.useCallback)((function() {
                            var e = new Date(l),
                                a = (new Date).getTime() - e.getTime(),
                                t = Math.trunc(a / 1e3 / 60 / 60);
                            if (t < 24) {
                                if (t < 1) return o("just now");
                                var n = 1 === t ? "hour" : "hours";
                                return o("".concat(t.toString(), " ").concat(n, " ago"))
                            }
                            var r = new Intl.DateTimeFormat("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }).format(e);
                            return o("on ".concat(r))
                        }), [l]);
                    return Object(n.useEffect)((function() {
                        m()
                    }), [m]), r.a.createElement("p", {
                        className: "card-text"
                    }, r.a.createElement("a", {
                        href: t + "/stargazers",
                        target: " _blank",
                        className: "text-dark text-decoration-none"
                    }, r.a.createElement("span", {
                        className: "text-dark card-link mr-4"
                    }, r.a.createElement("i", {
                        className: "fab fa-github"
                    }), " Stars", " ", r.a.createElement("span", {
                        className: "badge badge-dark"
                    }, a))), r.a.createElement("small", {
                        className: "text-muted"
                    }, "Updated ", i))
                },
                H = function(e) {
                    var a = e.value,
                        t = a.name,
                        n = a.description,
                        l = a.svn_url,
                        s = a.stargazers_count,
                        c = a.languages_url,
                        i = a.pushed_at;
                    return r.a.createElement(I.a, {
                        md: 6
                    }, r.a.createElement(F.a, {
                        className: "card shadow-lg p-3 mb-5 bg-white rounded"
                    }, r.a.createElement(F.a.Body, null, r.a.createElement(F.a.Title, {
                        as: "h5"
                    }, t || r.a.createElement(A.a, null), " "), r.a.createElement(F.a.Text, null, n || r.a.createElement(A.a, {
                        count: 3
                    }), " "), l ? r.a.createElement(B, {
                        svn_url: l
                    }) : r.a.createElement(A.a, {
                        count: 2
                    }), r.a.createElement("hr", null), c ? r.a.createElement(W, {
                        languages_url: c,
                        repo_url: l
                    }) : r.a.createElement(A.a, {
                        count: 3
                    }), a ? r.a.createElement(q, {
                        star_count: s,
                        repo_url: l,
                        pushed_at: i
                    }) : r.a.createElement(A.a, null))))
                },
                U = {
                    name: null,
                    description: null,
                    svn_url: null,
                    stargazers_count: null,
                    languages_url: null,
                    pushed_at: null
                },
                D = "https://api.github.com",
                J = function(e) {
                    var a = e.heading,
                        t = e.username,
                        l = e.length,
                        s = e.specfic,
                        c = "".concat(D, "/users/").concat(t, "/repos?sort=updated&direction=desc"),
                        i = "".concat(D, "/repos/").concat(t),
                        o = new Array(l + s.length).fill(U),
                        m = Object(n.useState)([]),
                        u = Object(_.a)(m, 2),
                        d = u[0],
                        f = u[1],
                        g = Object(n.useCallback)(Object(j.a)(x.a.mark((function e() {
                            var a, t, n, r, o, m;
                            return x.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = [], e.prev = 1, e.next = 4, L.a.get(c);
                                    case 4:
                                        t = e.sent, a = Object(P.a)(t.data.slice(0, l)), e.prev = 6, n = Object(z.a)(s), e.prev = 8, n.s();
                                    case 10:
                                        if ((r = n.n()).done) {
                                            e.next = 18;
                                            break
                                        }
                                        return o = r.value, e.next = 14, L.a.get("".concat(i, "/").concat(o));
                                    case 14:
                                        m = e.sent, a.push(m.data);
                                    case 16:
                                        e.next = 10;
                                        break;
                                    case 18:
                                        e.next = 23;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t0 = e.catch(8), n.e(e.t0);
                                    case 23:
                                        return e.prev = 23, n.f(), e.finish(23);
                                    case 26:
                                        e.next = 31;
                                        break;
                                    case 28:
                                        e.prev = 28, e.t1 = e.catch(6), console.error(e.t1.message);
                                    case 31:
                                        f(a), e.next = 37;
                                        break;
                                    case 34:
                                        e.prev = 34, e.t2 = e.catch(1), console.error(e.t2.message);
                                    case 37:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 34],
                                [6, 28],
                                [8, 20, 23, 26]
                            ])
                        }))), [c, l, s, i]);
                    return Object(n.useEffect)((function() {
                        g()
                    }), [g]), r.a.createElement(y.a, {
                        fluid: !0,
                        id: "projects",
                        className: "bg-light m-0"
                    }, r.a.createElement(w.a, {
                        className: ""
                    }, r.a.createElement("h2", {
                        className: "display-4 pb-5 text-center"
                    }, a), r.a.createElement(T.a, null, d.length ? d.map((function(e, a) {
                        return r.a.createElement(H, {
                            key: "project-card-".concat(a),
                            id: "project-card-".concat(a),
                            value: e
                        })
                    })) : o.map((function(e, a) {
                        return r.a.createElement(H, {
                            key: "dummy-".concat(a),
                            id: "dummy-".concat(a),
                            value: e
                        })
                    })))))
                },
                G = function(e) {
                    return r.a.createElement("footer", {
                        style: {
                            backgroundColor: "#f5f5f5"
                        },
                        className: "mt-auto py-5 text-center "
                    }, r.a.createElement(w.a, null, e.children, r.a.createElement("i", {
                        className: "fas fa-code"
                    }), " with ", r.a.createElement("i", {
                        className: "fas fa-heart"
                    }), " by", " ", r.a.createElement("a", {
                        className: "badge badge-dark",
                        rel: "noopener",
                        href: "https://github.com/fredylstianto",
                        "aria-label": "My GitHub"
                    }, "Fredy Liestianto"), " ", "using ", r.a.createElement("i", {
                        className: "fab fa-react"
                    }), r.a.createElement("p", null, r.a.createElement("small", {
                        className: "text-muted"
                    }, "Hello :v"))))
                },
                K = "undefined" !== typeof window ? n.useLayoutEffect : n.useEffect,
                V = "undefined" !== typeof window;

            function Z(e) {
                var a = e.element,
                    t = e.useWindow;
                if (!V) return {
                    x: 0,
                    y: 0
                };
                var n = (a ? a.current : document.body).getBoundingClientRect();
                return t ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: n.left,
                    y: n.top
                }
            }

            function Q(e, a, t, r, l) {
                var s = Object(n.useRef)(Z({
                        useWindow: r
                    })),
                    c = null,
                    i = function() {
                        var a = Z({
                            element: t,
                            useWindow: r
                        });
                        e({
                            prevPos: s.current,
                            currPos: a
                        }), s.current = a, c = null
                    };
                K((function() {
                    if (V) {
                        var e = function() {
                            l ? null === c && (c = setTimeout(i, l)) : i()
                        };
                        return window.addEventListener("scroll", e),
                            function() {
                                window.removeEventListener("scroll", e), c && clearTimeout(c)
                            }
                    }
                }), a)
            }
            Q.defaultProps = {
                deps: [],
                element: !1,
                useWindow: !1,
                wait: null
            };
            var X = function(e) {
                    var a = r.a.useState(null),
                        t = Object(_.a)(a, 2),
                        n = t[0],
                        l = t[1];
                    return r.a.useEffect((function() {
                        var a = e.current,
                            t = new ResizeObserver((function(e) {
                                e.forEach((function(e) {
                                    l(e.contentRect)
                                }))
                            }));
                        return t.observe(a),
                            function() {
                                t.unobserve(a)
                            }
                    }), [e]), n
                },
                Y = t(36),
                $ = t(20),
                ee = r.a.forwardRef((function(e, a) {
                    var t = Object(n.useState)(!0),
                        l = Object(_.a)(t, 2),
                        s = l[0],
                        c = l[1],
                        i = Object(n.useState)(0),
                        o = Object(_.a)(i, 2),
                        f = o[0],
                        p = o[1],
                        h = r.a.useRef(),
                        b = X(h),
                        v = b ? b.bottom : 0;
                    return Q((function(e) {
                        e.prevPos;
                        var t = e.currPos;
                        b && (t.y + a.current.offsetTop - b.bottom > 5 ? c(!0) : c(!1), p(t.y))
                    }), [v]), r.a.useEffect((function() {
                        b && (v - f >= a.current.offsetTop ? c(!1) : c(!0))
                    }), [v, b, a, f]), r.a.createElement(Y.a, {
                        ref: h,
                        className: " fixed-top  ".concat(s ? "navbar-transparent" : "navbar-white"),
                        expand: "lg"
                    }, r.a.createElement(Y.a.Brand, {
                        className: "brand",
                        href: "/#home"
                    }, "<".concat(m.firstName, " />")), r.a.createElement(Y.a.Toggle, {
                        "aria-controls": "basic-navbar-nav",
                        className: "toggler"
                    }), r.a.createElement(Y.a.Collapse, {
                        id: "basic-navbar-nav"
                    }, r.a.createElement($.a, {
                        className: "mr-auto"
                    }, d.show && r.a.createElement($.a.Link, {
                        className: "nav-link lead",
                        href: "/#projects"
                    }, "Projects"), r.a.createElement($.a.Link, {
                        className: "nav-link lead",
                        href: u.resume,
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }, "Resume"), u.show && r.a.createElement($.a.Link, {
                        className: "nav-link lead",
                        href: "/#aboutme"
                    }, "About"), g.show && r.a.createElement($.a.Link, {
                        className: "nav-link lead",
                        href: "/#skills"
                    }, "Skills"))))
                })),
                ae = t(52),
                te = t(74),
                ne = t(73);
            var re = function(e) {
                var a = e.skill,
                    t = e.value,
                    n = e.isScrolled;
                return r.a.createElement("div", {
                    style: {
                        width: "95%"
                    }
                }, r.a.createElement("p", {
                    className: "lead mb-1 mt-2"
                }, a), r.a.createElement(ne.a, {
                    className: n ? " progress-bar-animation" : "progress",
                    now: t
                }))
            };

            function le(e) {
                var a = e.skills,
                    t = e.isScrolled;
                return r.a.createElement(r.a.Fragment, null, a.map((function(e, a) {
                    return r.a.createElement(re, {
                        key: "".concat(e, "-").concat(a),
                        skill: e.name,
                        value: e.value,
                        isScrolled: t
                    })
                })))
            }
            var se = function(e) {
                var a = e.skills,
                    t = e.isScrolled;
                return r.a.createElement(r.a.Fragment, null, r.a.createElement(I.a, {
                    xs: 12,
                    md: 6
                }, r.a.createElement(le, {
                    skills: a.slice(0, Math.floor(a.length / 2)),
                    isScrolled: t
                })), r.a.createElement(I.a, {
                    xs: 12,
                    md: 6
                }, r.a.createElement(le, {
                    skills: a.slice(Math.floor(a.length / 2), a.length),
                    isScrolled: t
                })))
            };
            var ce = function(e) {
                    var a = e.heading,
                        t = e.hardSkills,
                        n = e.softSkills,
                        l = r.a.useRef(),
                        s = r.a.useState(!1),
                        c = Object(_.a)(s, 2),
                        i = c[0],
                        o = c[1];
                    return Q((function(e) {
                        e.prevPos;
                        var a = e.currPos;
                        !i && a.y - 400 < 0 && o(!0)
                    }), [], l), r.a.createElement(y.a, {
                        ref: l,
                        fluid: !0,
                        className: "bg-white m-0",
                        id: "skills"
                    }, r.a.createElement(w.a, {
                        className: "p-5 "
                    }, r.a.createElement("h2", {
                        ref: l,
                        className: "display-4 pb-5 text-center"
                    }, a), r.a.createElement(te.a, {
                        className: "skills-tabs",
                        defaultActiveKey: "hard-skills",
                        id: "skills-tabs"
                    }, r.a.createElement(ae.a, {
                        tabClassName: "skills-tab lead",
                        eventKey: "hard-skills",
                        title: "Technical Skills"
                    }, r.a.createElement(T.a, {
                        className: "pt-3 px-1"
                    }, r.a.createElement(se, {
                        skills: t,
                        isScrolled: i
                    }))), r.a.createElement(ae.a, {
                        tabClassName: "skills-tab lead",
                        eventKey: "soft-skills",
                        title: "Soft Skills"
                    }, r.a.createElement(T.a, {
                        className: "pt-3 px-1"
                    }, r.a.createElement(se, {
                        skills: n,
                        isScrolled: i
                    }))))))
                },
                ie = function(e) {
                    var a = e.heading,
                        t = e.message,
                        n = e.email;
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("h2", {
                        className: "display-4 pb-3 text-center"
                    }, a), r.a.createElement("p", {
                        className: "lead text-center pb-3"
                    }, t, ", ", r.a.createElement("a", {
                        href: "mailto:".concat(n)
                    }, n), "."))
                },
                oe = t(47),
                me = function(e) {
                    var a = e.heading,
                        t = e.message,
                        n = e.img,
                        l = e.imageSize;
                    return r.a.createElement("div", {
                        id: "leadership",
                        className: "jumbotron jumbotron-fluid m-0",
                        style: {
                            backgroundColor: "white"
                        }
                    }, r.a.createElement("div", {
                        className: "container container-fluid"
                    }, r.a.createElement("h2", {
                        className: "display-4 pb-5 text-center"
                    }, a), r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: "col-md-5"
                    }, r.a.createElement("p", {
                        className: "lead"
                    }, t)), r.a.createElement("div", {
                        className: "col-md-7"
                    }, r.a.createElement(oe.a, null, n.map((function(e, a) {
                        return r.a.createElement(oe.a.Item, null, r.a.createElement("img", {
                            className: "d-block w-100",
                            src: e.img,
                            alt: "First slide",
                            width: l.width,
                            height: l.height
                        }), r.a.createElement(oe.a.Caption, null, r.a.createElement("h3", null, e.label), r.a.createElement("p", null, e.paragraph)))
                    })))))))
                },
                ue = r.a.forwardRef((function(e, a) {
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(N, {
                        gradient: m.gradientColors,
                        title: "".concat(m.firstName, " ").concat(m.middleName, " ").concat(m.lastName),
                        message: m.message,
                        icons: m.icons,
                        ref: a
                    }), u.show && r.a.createElement(R, {
                        heading: u.heading,
                        message: u.message,
                        link: u.imageLink,
                        imgSize: u.imageSize,
                        resume: u.resume
                    }), d.show && r.a.createElement(J, {
                        heading: d.heading,
                        username: d.gitHubUsername,
                        length: d.reposLength,
                        specfic: d.specificRepos
                    }), f.show && r.a.createElement(me, {
                        heading: f.heading,
                        message: f.message,
                        img: f.images,
                        imageSize: f.imageSize
                    }), g.show && r.a.createElement(ce, {
                        heading: g.heading,
                        hardSkills: g.hardSkills,
                        softSkills: g.softSkills
                    }))
                })),
                de = function() {
                    var e = r.a.useRef();
                    return r.a.createElement(c.a, {
                        basename: "/"
                    }, o && r.a.createElement(ee, {
                        ref: e
                    }), r.a.createElement(i.a, {
                        path: "/",
                        exact: !0,
                        component: function() {
                            return r.a.createElement(ue, {
                                ref: e
                            })
                        }
                    }), r.a.createElement(G, null, p && r.a.createElement(ie, {
                        heading: h,
                        message: b,
                        email: v
                    })))
                };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            s.a.render(r.a.createElement(de, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        },
        49: function(e, a, t) {
            e.exports = t.p + "static/media/hashirshoaeb.5351f4f8.png"
        },
        56: function(e, a, t) {
            e.exports = t.p + "static/media/resume.d76a3131.pdf"
        },
        78: function(e, a, t) {
            e.exports = t(112)
        },
        83: function(e, a, t) {}
    },
    [
        [78, 1, 2]
    ]
]);
//# sourceMappingURL=main.058a52ca.chunk.js.map
