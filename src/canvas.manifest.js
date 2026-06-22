export const manifest = {
  screens: {
    scr_3wpnin: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_pgepic: { name: "About", route: "/about", position: { "x": 1560, "y": 220 } },
    scr_8t6oxz: { name: "Academics", route: "/academics", position: { "x": 2960, "y": 220 } },
    scr_p9b2hd: { name: "Student Life", route: "/student-life", position: { "x": 4360, "y": 220 } },
    scr_1ddqff: { name: "Admissions", route: "/admissions", position: { "x": 5760, "y": 220 } },
    scr_lf6gjq: { name: "News & Stories", route: "/news", position: { "x": 7160, "y": 220 } },
    scr_9psrvs: { name: "Contact", route: "/contact", position: { "x": 8560, "y": 220 } }
  },
  sections: {
    sec_khysn0: { name: "Landing Page Flow", x: 0, y: 0, width: 9920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_khysn0", children: [
    { kind: "screen", id: "scr_3wpnin" },
    { kind: "screen", id: "scr_pgepic" },
    { kind: "screen", id: "scr_8t6oxz" },
    { kind: "screen", id: "scr_p9b2hd" },
    { kind: "screen", id: "scr_1ddqff" },
    { kind: "screen", id: "scr_lf6gjq" },
    { kind: "screen", id: "scr_9psrvs" }]
  }]

};