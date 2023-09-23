import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          home: {
            title: "Welcome to a land steeped in magic",
            image1: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
            image2: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
            image3: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
            image4: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus. "
          },
          colwdvatn: {
            blurb: "The heart of the Sydfjords",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit minima praesentium accusamus excepturi nemo perferendis voluptatem quo eius magnam repellat? Beatae placeat minima ratione eos voluptatum ipsam doloremque vel. Cumque."
          },
          loremvik: {
            blurb: "The horse and livestock capital",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Brufoss Waterfall. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          ipsumvatn: {
            blurb: "Gateway to Brieborg",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          travel: {
            title: "How to get here",
            trains: {
              title: "Take The Train",
              blurb1: "A week on the train from Tinland through the pine forests and valleys.",
              blurb2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            sea: {
              title: "By Sea",
              blurb1: "The traditional way. Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
            },
            road: {
              title: "By Road",
              blurb1: "Historically, this was only for the adventurous and experienced motorist. In recent years, the road network has been significantly improved.",
              blurb2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis architecto optio culpa ex adipisci laudantium animi qui neque ullam. Tempora cum culpa sint possimus velit reprehenderit necessitatibus deleniti sit."
            }

          },
          hotels: {
            title: "Where to Stay",
            brufoss: {
              title: "Brufoss House",
              location: "Loremvik",
              blurb1: "Self-catering with a stunning backdrop.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem provident corporis quasi aliquid perferendis minus expedita, amet delectus, ea sed! Voluptas a, dolore doloremque omnis ratione unde nisi quam."
            },
            turfdwellers: {
              title: "Turfdwllers",
              location: "3km from Loremvik",
              blurb1: "Self-catering in a traditional house.",
              blurb2: "Rerum veniam quasi a esse illo ab consequuntur eveniet, voluptatem in suscipit veritatis possimus ullam ea quisquam asperiores, reprehenderit velit! Autem, cum."
            },
            brieborg: {
              title: "Brieborg Arms",
              location: "Colwdvatn",
              blurb1: "Modern living in the heart of the Sydfjords.",
              blurb2: "Aspernatur commodi eos voluptates vitae corrupti? Fugit corporis facilis excepturi similique necessitatibus dolorem, odio eum illo voluptatum quas voluptates ipsa! Rerum, quod."
            }
          },
          whales: {
            title: "Whale watching tours",
            blurb: "Few wildlife encounters can match coming face-to-face with a whale. The perfect family day out or bucket list entry.",
            image1: {
              first: "The bumpback whale is one of the most prevalent and majestic species in these waters.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image2: {
              first: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam recusandae assumenda odio possimus cupiditate deserunt eligendi animi dolore unde beatae libero velit saepe corrupti nemo, mollitia corporis provident enim.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image3: {
              first: "The lorthik, a traditional sailing vessel from the region, is now the premier way to watch these noble creatures.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?",
              fourth: "Odio fugiat, voluptas consectetur delectus nulla expedita accusamus dicta esse rerum provident ipsum nostrum animi enim dolorem perferendis nisi? Officiis, asperiores aut."
            },
            how: {
              title: "Where can I do this?",
              blurb: "Tours depart from Colwdvatn and Ipsemvatn during the summer months (December to March)."
            }
          },
          about: {
            title: "Got a query? Contact us!",
            offices: "Tourism Offices",
            email: {
              title: "Email Us",
              name: "Your Name",
              address: "Your Email",
              message: "Your Message"
            },
            info: {
              info1: "This is a React practice project, basically porting <a>this Vue app</a> to React. If you want to take a look at the source code, you can <a>find it here</a>",
              info2: "The email form above doesn't actually send anything. It just says that after a random delay to simulate network latency. ",
            }
          },
          navbar: {
            home: "Home",
            see: "See and Do",
            hotels: "Stay",
            travel: "Get Here",
            about: "About",
            whales: "Whale-Watching",
            colwdvatn: "Colwdvatn",
            loremvik: "Loremvik",
            ipsumvatn: "Ipsumvatn",
            changeLang: {
              alt: "Change Language",
              title: "Change Language",
            }
          },
          buttons: {
            nextImage: ">",
            lastImage: "<",
            submit: "Submit"
          },
          error: {
            title: "Oops...",
            explanation: "You probably tried to visit a page that doesn't exist. Or the developer is an eejit.",
            back: "Click <a>here</a> to go to the main page."
          }
        }
      },
      ga: {
        translation: {
          home: {
            title: "Welcome to a land steeped in magic",
            image1: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
            image2: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
            image3: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
            image4: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus. "
          },
          colwdvatn: {
            blurb: "The heart of the Sydfjords",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit minima praesentium accusamus excepturi nemo perferendis voluptatem quo eius magnam repellat? Beatae placeat minima ratione eos voluptatum ipsam doloremque vel. Cumque."
          },
          loremvik: {
            blurb: "The horse and livestock capital",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Brufoss Waterfall. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          ipsumvatn: {
            blurb: "Gateway to Brieborg",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          travel: {
            title: "How to get here",
            trains: {
              title: "Take The Train",
              blurb1: "A week on the train from Tinland through the pine forests and valleys.",
              blurb2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            sea: {
              title: "By Sea",
              blurb1: "The traditional way. Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
            },
            road: {
              title: "By Road",
              blurb1: "Historically, this was only for the adventurous and experienced motorist. In recent years, the road network has been significantly improved.",
              blurb2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis architecto optio culpa ex adipisci laudantium animi qui neque ullam. Tempora cum culpa sint possimus velit reprehenderit necessitatibus deleniti sit."
            }

          },
          hotels: {
            title: "Where to Stay",
            brufoss: {
              title: "Brufoss House",
              location: "Loremvik",
              blurb1: "Self-catering with a stunning backdrop.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem provident corporis quasi aliquid perferendis minus expedita, amet delectus, ea sed! Voluptas a, dolore doloremque omnis ratione unde nisi quam."
            },
            turfdwellers: {
              title: "Turfdwllers",
              location: "3km from Loremvik",
              blurb1: "Self-catering in a traditional house.",
              blurb2: "Rerum veniam quasi a esse illo ab consequuntur eveniet, voluptatem in suscipit veritatis possimus ullam ea quisquam asperiores, reprehenderit velit! Autem, cum."
            },
            brieborg: {
              title: "Brieborg Arms",
              location: "Colwdvatn",
              blurb1: "Modern living in the heart of the Sydfjords.",
              blurb2: "Aspernatur commodi eos voluptates vitae corrupti? Fugit corporis facilis excepturi similique necessitatibus dolorem, odio eum illo voluptatum quas voluptates ipsa! Rerum, quod."
            }
          },
          whales: {
            title: "Whale watching tours",
            blurb: "Few wildlife encounters can match coming face-to-face with a whale. The perfect family day out or bucket list entry.",
            image1: {
              first: "The bumpback whale is one of the most prevalent and majestic species in these waters.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image2: {
              first: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam recusandae assumenda odio possimus cupiditate deserunt eligendi animi dolore unde beatae libero velit saepe corrupti nemo, mollitia corporis provident enim.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image3: {
              first: "The lorthik, a traditional sailing vessel from the region, is now the premier way to watch these noble creatures.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?",
              fourth: "Odio fugiat, voluptas consectetur delectus nulla expedita accusamus dicta esse rerum provident ipsum nostrum animi enim dolorem perferendis nisi? Officiis, asperiores aut."
            },
            how: {
              title: "Where can I do this?",
              blurb: "Tours depart from Colwdvatn and Ipsemvatn during the summer months (December to March)."
            }
          },
          about: {
            title: "Got a query? Contact us!",
            offices: "Tourism Offices",
            email: {
              title: "Email Us",
              name: "Your Name",
              address: "Your Email",
              message: "Your Message"
            },
            info: {
              info1: "This is a React practice project, basically porting <a>this Vue app</a> to React. If you want to take a look at the source code, you can <a>find it here</a>",
              info2: "The email form above doesn't actually send anything. It just says that after a random delay to simulate network latency. ",
            }
          },
          navbar: {
            home: "Príomhleathanach",
            see: "Le Déanamh",
            hotels: "Fán",
            travel: "Taistáil",
            about: "Faoin Suíomh",
            whales: "Faireamh Ar Míolta Móra",
            changeLang: {
              alt: "Athraigh Teanga",
              title: "Athraigh Teanga",
            }
          },
          buttons: {
            nextImage: ">",
            lastImage: "<",
            submit: "Submit"
          },
          error: {
            title: "Oops...",
            explanation: "You probably tried to visit a page that doesn't exist. Or the developer is an eejit.",
            back: "Click <a>here</a> to go to the main page."
          }
        }
      },
      de: {
        translation: {
          home: {
            title: "Welcome to a land steeped in magic",
            image1: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
            image2: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
            image3: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
            image4: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus. "
          },
          colwdvatn: {
            blurb: "The heart of the Sydfjords",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit minima praesentium accusamus excepturi nemo perferendis voluptatem quo eius magnam repellat? Beatae placeat minima ratione eos voluptatum ipsam doloremque vel. Cumque."
          },
          loremvik: {
            blurb: "The horse and livestock capital",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Brufoss Waterfall. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          ipsumvatn: {
            blurb: "Gateway to Brieborg",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          travel: {
            title: "How to get here",
            trains: {
              title: "Take The Train",
              blurb1: "A week on the train from Tinland through the pine forests and valleys.",
              blurb2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            sea: {
              title: "By Sea",
              blurb1: "The traditional way. Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
            },
            road: {
              title: "By Road",
              blurb1: "Historically, this was only for the adventurous and experienced motorist. In recent years, the road network has been significantly improved.",
              blurb2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis architecto optio culpa ex adipisci laudantium animi qui neque ullam. Tempora cum culpa sint possimus velit reprehenderit necessitatibus deleniti sit."
            }

          },
          hotels: {
            title: "Where to Stay",
            brufoss: {
              title: "Brufoss House",
              location: "Loremvik",
              blurb1: "Self-catering with a stunning backdrop.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem provident corporis quasi aliquid perferendis minus expedita, amet delectus, ea sed! Voluptas a, dolore doloremque omnis ratione unde nisi quam."
            },
            turfdwellers: {
              title: "Turfdwllers",
              location: "3km from Loremvik",
              blurb1: "Self-catering in a traditional house.",
              blurb2: "Rerum veniam quasi a esse illo ab consequuntur eveniet, voluptatem in suscipit veritatis possimus ullam ea quisquam asperiores, reprehenderit velit! Autem, cum."
            },
            brieborg: {
              title: "Brieborg Arms",
              location: "Colwdvatn",
              blurb1: "Modern living in the heart of the Sydfjords.",
              blurb2: "Aspernatur commodi eos voluptates vitae corrupti? Fugit corporis facilis excepturi similique necessitatibus dolorem, odio eum illo voluptatum quas voluptates ipsa! Rerum, quod."
            }
          },
          whales: {
            title: "Whale watching tours",
            blurb: "Few wildlife encounters can match coming face-to-face with a whale. The perfect family day out or bucket list entry.",
            image1: {
              first: "The bumpback whale is one of the most prevalent and majestic species in these waters.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image2: {
              first: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam recusandae assumenda odio possimus cupiditate deserunt eligendi animi dolore unde beatae libero velit saepe corrupti nemo, mollitia corporis provident enim.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image3: {
              first: "The lorthik, a traditional sailing vessel from the region, is now the premier way to watch these noble creatures.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?",
              fourth: "Odio fugiat, voluptas consectetur delectus nulla expedita accusamus dicta esse rerum provident ipsum nostrum animi enim dolorem perferendis nisi? Officiis, asperiores aut."
            },
            how: {
              title: "Where can I do this?",
              blurb: "Tours depart from Colwdvatn and Ipsemvatn during the summer months (December to March)."
            }
          },
          about: {
            title: "Got a query? Contact us!",
            offices: "Tourism Offices",
            email: {
              title: "Email Us",
              name: "Your Name",
              address: "Your Email",
              message: "Your Message"
            },
            info: {
              info1: "This is a React practice project, basically porting <a>this Vue app</a> to React. If you want to take a look at the source code, you can <a>find it here</a>",
              info2: "The email form above doesn't actually send anything. It just says that after a random delay to simulate network latency. ",
            }
          },
          navbar: {
            home: "Hauptseite",
            see: "Zum Besehen",
            hotels: "Verweilen Sie",
            travel: "Kommen Sie Hier",
            about: "Um Dieser Seite",
            whales: "Walbeobachtung",
            changeLang: {
              alt: "Sprache Wählen",
              title: "Sprache Wählen"
            }
          },
          buttons: {
            nextImage: ">",
            lastImage: "<",
            submit: "Submit"
          },
          error: {
            title: "Oops...",
            explanation: "You probably tried to visit a page that doesn't exist. Or the developer is an eejit.",
            back: "Click <a>here</a> to go to the main page."
          }
        }
      },
      it: {
        translation: {
          home: {
            title: "Welcome to a land steeped in magic",
            image1: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
            image2: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
            image3: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
            image4: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus. "
          },
          colwdvatn: {
            blurb: "The heart of the Sydfjords",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit minima praesentium accusamus excepturi nemo perferendis voluptatem quo eius magnam repellat? Beatae placeat minima ratione eos voluptatum ipsam doloremque vel. Cumque."
          },
          loremvik: {
            blurb: "The horse and livestock capital",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Brufoss Waterfall. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          ipsumvatn: {
            blurb: "Gateway to Brieborg",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          travel: {
            title: "How to get here",
            trains: {
              title: "Take The Train",
              blurb1: "A week on the train from Tinland through the pine forests and valleys.",
              blurb2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            sea: {
              title: "By Sea",
              blurb1: "The traditional way. Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
            },
            road: {
              title: "By Road",
              blurb1: "Historically, this was only for the adventurous and experienced motorist. In recent years, the road network has been significantly improved.",
              blurb2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis architecto optio culpa ex adipisci laudantium animi qui neque ullam. Tempora cum culpa sint possimus velit reprehenderit necessitatibus deleniti sit."
            }

          },
          hotels: {
            title: "Where to Stay",
            brufoss: {
              title: "Brufoss House",
              location: "Loremvik",
              blurb1: "Self-catering with a stunning backdrop.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem provident corporis quasi aliquid perferendis minus expedita, amet delectus, ea sed! Voluptas a, dolore doloremque omnis ratione unde nisi quam."
            },
            turfdwellers: {
              title: "Turfdwllers",
              location: "3km from Loremvik",
              blurb1: "Self-catering in a traditional house.",
              blurb2: "Rerum veniam quasi a esse illo ab consequuntur eveniet, voluptatem in suscipit veritatis possimus ullam ea quisquam asperiores, reprehenderit velit! Autem, cum."
            },
            brieborg: {
              title: "Brieborg Arms",
              location: "Colwdvatn",
              blurb1: "Modern living in the heart of the Sydfjords.",
              blurb2: "Aspernatur commodi eos voluptates vitae corrupti? Fugit corporis facilis excepturi similique necessitatibus dolorem, odio eum illo voluptatum quas voluptates ipsa! Rerum, quod."
            }
          },
          whales: {
            title: "Whale watching tours",
            blurb: "Few wildlife encounters can match coming face-to-face with a whale. The perfect family day out or bucket list entry.",
            image1: {
              first: "The bumpback whale is one of the most prevalent and majestic species in these waters.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image2: {
              first: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam recusandae assumenda odio possimus cupiditate deserunt eligendi animi dolore unde beatae libero velit saepe corrupti nemo, mollitia corporis provident enim.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image3: {
              first: "The lorthik, a traditional sailing vessel from the region, is now the premier way to watch these noble creatures.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?",
              fourth: "Odio fugiat, voluptas consectetur delectus nulla expedita accusamus dicta esse rerum provident ipsum nostrum animi enim dolorem perferendis nisi? Officiis, asperiores aut."
            },
            how: {
              title: "Where can I do this?",
              blurb: "Tours depart from Colwdvatn and Ipsemvatn during the summer months (December to March)."
            }
          },
          about: {
            title: "Got a query? Contact us!",
            offices: "Tourism Offices",
            email: {
              title: "Email Us",
              name: "Your Name",
              address: "Your Email",
              message: "Your Message"
            },
            info: {
              info1: "This is a React practice project, basically porting <a>this Vue app</a> to React. If you want to take a look at the source code, you can <a>find it here</a>",
              info2: "The email form above doesn't actually send anything. It just says that after a random delay to simulate network latency. ",
            }
          },
          navbar: {
            home: "Principale",
            see: "Da Fare",
            hotels: "Restare",
            travel: "Arrivare",
            about: "Informazioni",
            whales: "Osservazione Delle Balene",
            changeLang: {
              alt: "Cambia Lingua",
              title: "Cambia Lingua",
            }
          },
          buttons: {
            nextImage: ">",
            lastImage: "<",
            submit: "Submit"
          },
          error: {
            title: "Oops...",
            explanation: "You probably tried to visit a page that doesn't exist. Or the developer is an eejit.",
            back: "Click <a>here</a> to go to the main page."
          }
        }
      },
      ar: {
        translation: {
          home: {
            title: "Welcome to a land steeped in magic",
            image1: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
            image2: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
            image3: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
            image4: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus. "
          },
          colwdvatn: {
            blurb: "The heart of the Sydfjords",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit minima praesentium accusamus excepturi nemo perferendis voluptatem quo eius magnam repellat? Beatae placeat minima ratione eos voluptatum ipsam doloremque vel. Cumque."
          },
          loremvik: {
            blurb: "The horse and livestock capital",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Brufoss Waterfall. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          ipsumvatn: {
            blurb: "Gateway to Brieborg",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          travel: {
            title: "How to get here",
            trains: {
              title: "Take The Train",
              blurb1: "A week on the train from Tinland through the pine forests and valleys.",
              blurb2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            sea: {
              title: "By Sea",
              blurb1: "The traditional way. Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
            },
            road: {
              title: "By Road",
              blurb1: "Historically, this was only for the adventurous and experienced motorist. In recent years, the road network has been significantly improved.",
              blurb2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis architecto optio culpa ex adipisci laudantium animi qui neque ullam. Tempora cum culpa sint possimus velit reprehenderit necessitatibus deleniti sit."
            }

          },
          hotels: {
            title: "Where to Stay",
            brufoss: {
              title: "Brufoss House",
              location: "Loremvik",
              blurb1: "Self-catering with a stunning backdrop.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem provident corporis quasi aliquid perferendis minus expedita, amet delectus, ea sed! Voluptas a, dolore doloremque omnis ratione unde nisi quam."
            },
            turfdwellers: {
              title: "Turfdwllers",
              location: "3km from Loremvik",
              blurb1: "Self-catering in a traditional house.",
              blurb2: "Rerum veniam quasi a esse illo ab consequuntur eveniet, voluptatem in suscipit veritatis possimus ullam ea quisquam asperiores, reprehenderit velit! Autem, cum."
            },
            brieborg: {
              title: "Brieborg Arms",
              location: "Colwdvatn",
              blurb1: "Modern living in the heart of the Sydfjords.",
              blurb2: "Aspernatur commodi eos voluptates vitae corrupti? Fugit corporis facilis excepturi similique necessitatibus dolorem, odio eum illo voluptatum quas voluptates ipsa! Rerum, quod."
            }
          },
          whales: {
            title: "Whale watching tours",
            blurb: "Few wildlife encounters can match coming face-to-face with a whale. The perfect family day out or bucket list entry.",
            image1: {
              first: "The bumpback whale is one of the most prevalent and majestic species in these waters.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image2: {
              first: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam recusandae assumenda odio possimus cupiditate deserunt eligendi animi dolore unde beatae libero velit saepe corrupti nemo, mollitia corporis provident enim.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image3: {
              first: "The lorthik, a traditional sailing vessel from the region, is now the premier way to watch these noble creatures.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?",
              fourth: "Odio fugiat, voluptas consectetur delectus nulla expedita accusamus dicta esse rerum provident ipsum nostrum animi enim dolorem perferendis nisi? Officiis, asperiores aut."
            },
            how: {
              title: "Where can I do this?",
              blurb: "Tours depart from Colwdvatn and Ipsemvatn during the summer months (December to March)."
            }
          },
          about: {
            title: "Got a query? Contact us!",
            offices: "Tourism Offices",
            email: {
              title: "Email Us",
              name: "Your Name",
              address: "Your Email",
              message: "Your Message"
            },
            info: {
              info1: "This is a React practice project, basically porting <a>this Vue app</a> to React. If you want to take a look at the source code, you can <a>find it here</a>",
              info2: "The email form above doesn't actually send anything. It just says that after a random delay to simulate network latency. ",
            }
          },
          navbar: {
            home: "الصفحة الرئيسية",
            see: "انظر وافعل",
            hotels: "الفنادق",
            travel: "تعال هنا",
            about: "عن",
            whales: "مشاهدة الحيتان",
            colwdvatn: "كولودفاتن",
            loremvik: "لوريمفيك",
            ipsumvatn: "إبسومفاتن",
            changeLang: {
              alt: "تغيير اللغة",
              title: "تغيير اللغة",
            }
          },
          buttons: {
            nextImage: ">",
            lastImage: "<",
            submit: "Submit"
          },
          error: {
            title: "Oops...",
            explanation: "You probably tried to visit a page that doesn't exist. Or the developer is an eejit.",
            back: "Click <a>here</a> to go to the main page."
          }
        }
      },
      ja: {
        translation: {
          home: {
            title: "Welcome to a land steeped in magic",
            image1: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
            image2: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
            image3: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
            image4: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus. "
          },
          colwdvatn: {
            blurb: "The heart of the Sydfjords",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit minima praesentium accusamus excepturi nemo perferendis voluptatem quo eius magnam repellat? Beatae placeat minima ratione eos voluptatum ipsam doloremque vel. Cumque."
          },
          loremvik: {
            blurb: "The horse and livestock capital",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Brufoss Waterfall. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          ipsumvatn: {
            blurb: "Gateway to Brieborg",
            image1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
            image2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!",
            end: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
          },
          travel: {
            title: "How to get here",
            trains: {
              title: "Take The Train",
              blurb1: "A week on the train from Tinland through the pine forests and valleys.",
              blurb2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            sea: {
              title: "By Sea",
              blurb1: "The traditional way. Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"
            },
            road: {
              title: "By Road",
              blurb1: "Historically, this was only for the adventurous and experienced motorist. In recent years, the road network has been significantly improved.",
              blurb2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis architecto optio culpa ex adipisci laudantium animi qui neque ullam. Tempora cum culpa sint possimus velit reprehenderit necessitatibus deleniti sit."
            }

          },
          hotels: {
            title: "Where to Stay",
            brufoss: {
              title: "Brufoss House",
              location: "Loremvik",
              blurb1: "Self-catering with a stunning backdrop.",
              blurb2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem provident corporis quasi aliquid perferendis minus expedita, amet delectus, ea sed! Voluptas a, dolore doloremque omnis ratione unde nisi quam."
            },
            turfdwellers: {
              title: "Turfdwllers",
              location: "3km from Loremvik",
              blurb1: "Self-catering in a traditional house.",
              blurb2: "Rerum veniam quasi a esse illo ab consequuntur eveniet, voluptatem in suscipit veritatis possimus ullam ea quisquam asperiores, reprehenderit velit! Autem, cum."
            },
            brieborg: {
              title: "Brieborg Arms",
              location: "Colwdvatn",
              blurb1: "Modern living in the heart of the Sydfjords.",
              blurb2: "Aspernatur commodi eos voluptates vitae corrupti? Fugit corporis facilis excepturi similique necessitatibus dolorem, odio eum illo voluptatum quas voluptates ipsa! Rerum, quod."
            }
          },
          whales: {
            title: "Whale watching tours",
            blurb: "Few wildlife encounters can match coming face-to-face with a whale. The perfect family day out or bucket list entry.",
            image1: {
              first: "The bumpback whale is one of the most prevalent and majestic species in these waters.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image2: {
              first: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam recusandae assumenda odio possimus cupiditate deserunt eligendi animi dolore unde beatae libero velit saepe corrupti nemo, mollitia corporis provident enim.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?"
            },
            image3: {
              first: "The lorthik, a traditional sailing vessel from the region, is now the premier way to watch these noble creatures.",
              second: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!",
              third: "Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?",
              fourth: "Odio fugiat, voluptas consectetur delectus nulla expedita accusamus dicta esse rerum provident ipsum nostrum animi enim dolorem perferendis nisi? Officiis, asperiores aut."
            },
            how: {
              title: "Where can I do this?",
              blurb: "Tours depart from Colwdvatn and Ipsemvatn during the summer months (December to March)."
            }
          },
          about: {
            title: "Got a query? Contact us!",
            offices: "Tourism Offices",
            email: {
              title: "Email Us",
              name: "Your Name",
              address: "Your Email",
              message: "Your Message"
            },
            info: {
              info1: "This is a React practice project, basically porting <a>this Vue app</a> to React. If you want to take a look at the source code, you can <a>find it here</a>",
              info2: "The email form above doesn't actually send anything. It just says that after a random delay to simulate network latency. ",
            }
          },
          navbar: {
            home: "ホームページ",
            see: "見て、やってみよう",
            hotels: "滞在する",
            travel: "ここへ到着する",
            about: "について",
            whales: "ホエールウォッチング",
            colwdvatn: "コルドヴァトン",
            loremvik: "ロレンヴィク",
            ipsumvatn: "イプサムヴァトン",
            changeLang: {
              alt: "言語を変えてください",
              title: "言語を変えてください",
            }
          },
          buttons: {
            nextImage: ">",
            lastImage: "<",
            submit: "Submit"
          },
          error: {
            title: "Oops...",
            explanation: "You probably tried to visit a page that doesn't exist. Or the developer is an eejit.",
            back: "Click <a>here</a> to go to the main page."
          }
        }
      }
    }
  });
