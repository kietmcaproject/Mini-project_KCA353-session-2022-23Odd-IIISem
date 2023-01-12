export const setPlaylist = (playlist) => {     return { 
        type:"SET_PLAYLIST",         payload:playlist 
    }; 
}; 
export const setCurrentPlaying = (curr_music) => {     return { 
        type: "SET_CURR_PLAYING",         payload: curr_music 
    }; 
} 
export const setBannerOpen = (isOpen) => { 
    return { 
        type:"SET_BANNER_OPEN",         payload:isOpen 
    }; 
}; 
 
export const increaseTimesPlayed = (id) => {     return { 
        type:"INC_TIMES_PLAYED",         payload: id 
    }; 
}; 
 
export const setSearch = (searchQuery) => {     return { 
        type:"SET_SEARCH_QUERY",         payload: searchQuery 
    }; 
}; 
 
export const setMusicLang = (langList) => {     return { 
        type:"SET_MUSIC_LIST",         payload: langList 
    }; }; import React from "react"; 
 
export const themes = { 
    light: {         theme: "#07689f",         subTheme: "#a2d5f2",                                     component:{             backgroundColor: "#f6f6f6",             color: "#2b2024", 
        },         button:{             onHover:{                 backgroundColor:"#a2d5f2",                 color:"#191919" 
            },             contained:{                 backgroundColor: "#07689f",                 color:"#fafafa" 
            },             outlined:{                 backgroundColor:"transparent",                 color:"#191919" 
            } 
        }, 
        volume:{ 
            color:"#07689f" 
        }     },     dark: {         theme:"#4ecca3",         subTheme: "#a2d5f2",         component:{             backgroundColor: "#232931",             color: "#eeeeee", 
        },         button:{             onHover:{                 backgroundColor:"#a2d5f2",                 color:"#fafafa" 
            },                                                                         contained:{                 backgroundColor: "#07689f",                 color:"black" 
},             outlined:{ 
                backgroundColor:"transparent",                 color:"#fafafa" 
            } 
        }, 
        volume:{             color:"#07689f" 
        } 
    } 
}; 
 
export const ThemeContext = React.createContext(     themes.light 
); 
 
/* 
export const ThemeProvider = (props) => {     const [theme,setTheme] = useState("light");     return ( 
        <ThemeContext.Provider value={[theme,setTheme]}> 
            {props.children} 
        </ThemeContext.Provider> 
    ); 
}*/ 
 
[11:08 am, 25/12/2022] Prashant Dost 1: import React, {useEffect} from "react"; import './App.scss'; 
import Home from "../components/Pages/Home"; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; import Login from "../components/Pages/Login";        import {ThemeContext, themes} from "../api/Theme"; import musicDB from "../db/music"; 
import {useDispatch, useSelector} from "react-redux"; import {setPlaylist} from "../actions/actions"; 
 
const App = () => { 
 
    const {language} = useSelector(state => state.musicReducer); 
 
    const dispatch = useDispatch();     useEffect(()=>{ 
        if (language === null || language.includes("any")){             dispatch(setPlaylist(musicDB)) 
        } 
        else if (language.includes('hindi')){             alert("No hindi tracks available") 
        } else { 
            let x = musicDB.filter((item)=>( 
                item.lang && language.includes(item.lang.toLowerCase()) 
            )) 
            dispatch(setPlaylist(x)) 
        } 
    },[dispatch, language]); 
 
    return ( 
        <ThemeContext.Provider value={themes.light}> 
            <> 
                <Router> 
                    <Switch> 
                        <Route path="/" exact component={Login}/> 
                        <Route path="/home" component={Home}/> 
                    </Switch> 
                </Router> 
            </>\                                                                  
        </ThemeContext.Provider> 
    ); 
} 
 
export default App; 
 * { 
  box-sizing: border-box; 
} 
 
body { 
  font-family: Consolas, sans-serif;   padding: 0;   margin: 0;   background-color: #F1F1F1; 
} 
 
h1, h2, h3, h4, h5, h6, p {   margin: 0;   padding: 0; 
 
} 
 
a { 
  text-decoration: none; 
} 
 
/*# sourceMappingURL=index.scss.map */ 
"node_modules/@babel/plugin-transform-modules-umd": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transformmodules-umd-7.18.6.tgz", 
      "integrity": "sha512-
dcegErExVeXcRqNtkRU/z8WlBLnvD4MRnHgNs3MytRO1Mn1sHRyhbcpYbVMGclAqOjdW+9cfkdZno 9dFdfKLfQ==", 
      "dependencies": { 
        "@babel/helper-module-transforms": "^7.18.6",                              "@babel/helper-plugin-utils": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-named-capturing-groups-regex": {       "version": "7.19.1", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex//plugin-transform-named-capturing-groups-regex-7.19.1.tgz", 
      "integrity": "sha512-
oWk9l9WItWBQYS4FgXD4Uyy5kq898lvkXpXQxoJEY1RnvPk4R/Dvu2ebXU9q8lP+rlMwUQTFf2Ok6d 78ODa0kw==", 
      "dependencies": { 
        "@babel/helper-create-regexp-features-plugin": "^7.19.0", 
"@babel/helper-plugin-utils": "^7.19.0" 
"engines": { 
"node": ">=6.9.0" 
}, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-new-target": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-newtarget-7.18.6.tgz", 
      "integrity": "sha512-
DjwFA/9Iu3Z+vrAn+8pBUGcjhxKguSMlsFqeCKbhb9BAV756v0krzVK04CRDi/4aqmk8BsHb4a/gFcaA5j oXRw==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6”           
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-object-super": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-objectsuper-7.18.6.tgz", 
      "integrity": "sha512-
uvGz6zk+pZoS1aTZrOvrbj6Pp/kK2mp45t2B+bTDre2UgsZZ8EZLSJtUg7m/no0zOJUWgFONpB7Zv9W2t SaFlA==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6", 
        "@babel/helper-replace-supers": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-parameters": { 
      "version": "7.18.8", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transformparameters-7.18.8.tgz", 
      "integrity": "sha512-
ivfbE3X2Ss+Fj8nnXvKJS6sjRG4gzwPMsP+taZC+ZzEGjAYlvENixmt1sZ5Ca6tWls+BlKSGKPJ6OOXvX CbkFg==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6" 
      },                                                                   
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-property-literals": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transformproperty-literals-7.18.6.tgz", 
      "integrity": "sha512-
cYcs6qlgafTud3PAzrrRNbQtfpQ8+y/+M5tKmksS9+M1ckbH6kzY8MrexEM9mcA6JDsukE19iIRvAyYl46 3sMg==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6" 
      }, 
      "engines": { 
"node": ">=6.9.0"
"peerDependencies": { 
"@babel/core": "^7.0.0-0" 
} 
    }, 
    "node_modules/@babel/plugin-transform-react-constant-elements": { 
      "version": "7.18.12", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-constant-elements/-/plugintransform-react-constant-elements-7.18.12.tgz", 
      "integrity": "sha512-
Q99U9/ttiu+LMnRU8psd23HhvwXmKWDQIpocm0JKaICcZHnw+mdQbHm6xnSy7dOl8I5PELakYtNBu bNQlBXbZw==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.9" 
      }, 
      "engines": { 
        "node": ">=6.9.0"                                                   }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-react-display-name": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transformreact-display-name-7.18.6.tgz", 
      "integrity": "sha512-
TV4sQ+T013n61uMoygyMRm+xf04Bd5oqFpv2jAEQwSZ8NwQA7zeRPg1LMVg2PWi3zWBz+CLKD+v 5bcpZ/BS0aA==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
} 
    }, 
    "node_modules/@babel/plugin-transform-react-jsx": { 
      "version": "7.19.0", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx7.19.0.tgz", 
      "integrity": "sha512-
UVEvX3tXie3Szm3emi1+G63jyw1w5IcMY0FSKM+CRnKRI5Mr1YbCNgsSTwoTwKphQEG9P+QqmuR FneJPZuHNhg==", 
      "dependencies": { 
        "@babel/helper-annotate-as-pure": "^7.18.6", 
        "@babel/helper-module-imports": "^7.18.6", 
        "@babel/helper-plugin-utils": "^7.19.0", 
        "@babel/plugin-syntax-jsx": "^7.18.6",         "@babel/types": "^7.19.0" 
      },                                                               
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-react-jsx-development": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-development/-/plugintransform-react-jsx-development-7.18.6.tgz", 
      "integrity": "sha512-
SA6HEjwYFKF7WDjWcMcMGUimmw/nhNRDWxr+KaLSCrkD/LMDBvWRmHAYgE1HDeF8KUuI8O Au+RT6EOtKxSW2qA==", 
      "dependencies": { 
        "@babel/plugin-transform-react-jsx": "^7.18.6" 
      }, 
      "engines": { 
"node": ">=6.9.0"
 
"peerDependencies": { 
"@babel/core": "^7.0.0-0" 
} 
    }, 
    "node_modules/@babel/plugin-transform-react-pure-annotations": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-pure-annotations/-/plugintransform-react-pure-annotations-7.18.6.tgz", 
      "integrity": "sha512-
I8VfEPg9r2TRDdvnHgPepTKvuRomzA8+u+nhY7qSI1fR2hRNebasZEETLyM5mAUr0Ku56OkXJ0I7NH JnO6cJiQ==", 
      "dependencies": { 
        "@babel/helper-annotate-as-pure": "^7.18.6", 
        "@babel/helper-plugin-utils": "^7.18.6" 
      }, 
      "engines": {                                          
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-regenerator": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transformregenerator-7.18.6.tgz", 
      "integrity": "sha512-
poqRI2+qiSdeldcz4wTSTXBRryoq3Gc70ye7m7UD5Ww0nE29IXqMl6r7Nd15WBgRd74vloEMlShtH6CK xVzfmQ==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6", 
        "regenerator-transform": "^0.15.0" 
      }, 
      "engines": { 
"node": ">=6.9.0"
"peerDependencies": { 
"@babel/core": "^7.0.0-0" 
} 
    }, 
    "node_modules/@babel/plugin-transform-reserved-words": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transformreserved-words-7.18.6.tgz", 
      "integrity": "sha512-
oX/4MyMoypzHjFrT1CdivfKZ+XvIPMFXwwxHp/r0Ddy2Vuomt4HDFGmft1TAY2yiTKiNSsh3kjBAzc M8kSdsjA==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0"                                  
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-runtime": { 
      "version": "7.19.1", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime7.19.1.tgz", 
      "integrity": "sha512-
2nJjTUFIzBMP/f/miLxEK9vxwW/KUXsdvN4sR//TmuDhe6yU2h57WmIOE12Gng3MDP/xpjUV/ToZRdc f8Yj4fA==", 
      "dependencies": { 
        "@babel/helper-module-imports": "^7.18.6", 
        "@babel/helper-plugin-utils": "^7.19.0", 
        "babel-plugin-polyfill-corejs2": "^0.3.3", 
        "babel-plugin-polyfill-corejs3": "^0.6.0", 
        "babel-plugin-polyfill-regenerator": "^0.4.1", 
"semver": "^6.3.0"
"engines": { 
"node": ">=6.9.0" 
}, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-runtime/node_modules/semver": {       "version": "6.3.0", 
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz", 
      "integrity": "sha512-
b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeU wu5HHTw==", 
      "bin": { 
        "semver": "bin/semver.js"                              
      } 
    }, 
    "node_modules/@babel/plugin-transform-shorthand-properties": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugintransform-shorthand-properties-7.18.6.tgz", 
      "integrity": "sha512-
eCLXXJqv8okzg86ywZJbRn19YJHU4XUa55oz2wbHhaQVn/MM+XhukiT7SYqp/7o00dg52Rj51Ny+Ecw 4oyoygw==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-spread": { 
 
"version": "7.19.0", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread7.19.0.tgz", 
      "integrity": "sha512-
RsuMk7j6n+r752EtzyScnWkQyuJdli6LdO5Klv8Yx0OfPVTcQkIUfS8clx5e9yHXzlnhOZF3CbQ8C2uP5j0 74w==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.19.0", 
        "@babel/helper-skip-transparent-expression-wrappers": "^7.18.9" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      }                                                                    
    }, 
    "node_modules/@babel/plugin-transform-sticky-regex": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-stickyregex-7.18.6.tgz", 
      "integrity": "sha512-
kfiDrDQ+PBsQDO85yj1icueWMfGfJFKN1KCkndygtu/C9+XUfydLC8Iv5UYJqRwy4zk8EcplRxEOeLyjq 1gm6Q==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-template-literals": { 
      "version": "7.18.9", 
"resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transformtemplate-literals-7.18.9.tgz", 
      "integrity": "sha512-
S8cOWfT82gTezpYOiVaGHrCbhlHgKhQt8XH5ES46P2XWmX92yisoZywf5km75wv5sYcXDUCLMmM xOLCtthDgMA==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.9" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-typeof-symbol": {                
      "version": "7.18.9", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transformtypeof-symbol-7.18.9.tgz", 
      "integrity": "sha512-
SRfwTtF11G2aemAZWivL7PD+C9z52v9EvMqH9BuYbabyPuKUvSWks3oCg6041pT925L4zVFqaVBeE CwsmlguEw==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.9" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-typescript": { 
      "version": "7.19.3", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transformtypescript-7.19.3.tgz", 
"integrity": "sha512-
z6fnuK9ve9u/0X0rRvI9MY0xg+DOUaABDYOe+/SQTxtlptaBB/V9JIUxJn6xp3lMBeb9qe8xSFmHU35oZ DXD+w==", 
      "dependencies": { 
        "@babel/helper-create-class-features-plugin": "^7.19.0", 
        "@babel/helper-plugin-utils": "^7.19.0", 
        "@babel/plugin-syntax-typescript": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-unicode-escapes": {                 
      "version": "7.18.10", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transformunicode-escapes-7.18.10.tgz", 
      "integrity": "sha512-
kKAdAI+YzPgGY/ftStBFXTI1LZFju38rYThnfMykS+IXy8BVx+res7s2fxf1l8I35DV2T97ezo6+SGrXz6B 3iQ==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.9" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/plugin-transform-unicode-regex": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transformunicode-regex-7.18.6.tgz", 
"integrity": "sha512-
gE7A6Lt7YLnNOL3Pb9BNeZvi+d8l7tcRrG4+pwJjK9hD2xX4mEvjlQW60G9EEmfXVYRPv9VRQcyegI VHCql/AA==", 
      "dependencies": { 
        "@babel/helper-create-regexp-features-plugin": "^7.18.6",         "@babel/helper-plugin-utils": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/preset-env": { 
      "version": "7.19.3",                                           
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.19.3.tgz", 
      "integrity": "sha512-
ziye1OTc9dGFOAXSWKUqQblYHNlBOaDl8wzqf2iKXJAltYiR3hKHUKmkt+S9PppW7RQpq4fFCrwwp
IDj/f5P4w==", 
      "dependencies": { 
        "@babel/compat-data": "^7.19.3", 
        "@babel/helper-compilation-targets": "^7.19.3", 
        "@babel/helper-plugin-utils": "^7.19.0", 
        "@babel/helper-validator-option": "^7.18.6", 
        "@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": "^7.18.6", 
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.18.9", 
        "@babel/plugin-proposal-async-generator-functions": "^7.19.1", 
        "@babel/plugin-proposal-class-properties": "^7.18.6", 
        "@babel/plugin-proposal-class-static-block": "^7.18.6", 
        "@babel/plugin-proposal-dynamic-import": "^7.18.6", 
        "@babel/plugin-proposal-export-namespace-from": "^7.18.9", 
        "@babel/plugin-proposal-json-strings": "^7.18.6", 
        "@babel/plugin-proposal-logical-assignment-operators": "^7.18.9", 
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.18.6",         "@babel/plugin-proposal-numeric-separator": "^7.18.6", 
        "@babel/plugin-proposal-object-rest-spread": "^7.18.9", 
        "@babel/plugin-proposal-optional-catch-binding": "^7.18.6", 
        "@babel/plugin-proposal-optional-chaining": "^7.18.9", 
        "@babel/plugin-proposal-private-methods": "^7.18.6", 
        "@babel/plugin-proposal-private-property-in-object": "^7.18.6", 
        "@babel/plugin-proposal-unicode-property-regex": "^7.18.6", 
        "@babel/plugin-syntax-async-generators": "^7.8.4", 
        "@babel/plugin-syntax-class-properties": "^7.12.13", 
        "@babel/plugin-syntax-class-static-block": "^7.14.5", 
        "@babel/plugin-syntax-dynamic-import": "^7.8.3", 
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3", 
        "@babel/plugin-syntax-import-assertions": "^7.18.6", 
        "@babel/plugin-syntax-json-strings": "^7.8.3", 
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",              
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3", 
        "@babel/plugin-syntax-numeric-separator": "^7.10.4", 
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3", 
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3", 
        "@babel/plugin-syntax-optional-chaining": "^7.8.3", 
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5", 
        "@babel/plugin-syntax-top-level-await": "^7.14.5", 
        "@babel/plugin-transform-arrow-functions": "^7.18.6", 
        "@babel/plugin-transform-async-to-generator": "^7.18.6", 
        "@babel/plugin-transform-block-scoped-functions": "^7.18.6", 
        "@babel/plugin-transform-block-scoping": "^7.18.9", 
        "@babel/plugin-transform-classes": "^7.19.0", 
        "@babel/plugin-transform-computed-properties": "^7.18.9", 
        "@babel/plugin-transform-destructuring": "^7.18.13", 
        "@babel/plugin-transform-dotall-regex": "^7.18.6", 
        "@babel/plugin-transform-duplicate-keys": "^7.18.9", 
        "@babel/plugin-transform-exponentiation-operator": "^7.18.6", 
        "@babel/plugin-transform-for-of": "^7.18.8", 
        "@babel/plugin-transform-function-name": "^7.18.9",         "@babel/plugin-transform-literals": "^7.18.9", 
        "@babel/plugin-transform-member-expression-literals": "^7.18.6", 
        "@babel/plugin-transform-modules-amd": "^7.18.6", 
        "@babel/plugin-transform-modules-commonjs": "^7.18.6", 
        "@babel/plugin-transform-modules-systemjs": "^7.19.0", 
        "@babel/plugin-transform-modules-umd": "^7.18.6", 
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.19.1", 
        "@babel/plugin-transform-new-target": "^7.18.6", 
        "@babel/plugin-transform-object-super": "^7.18.6", 
        "@babel/plugin-transform-parameters": "^7.18.8", 
        "@babel/plugin-transform-property-literals": "^7.18.6", 
        "@babel/plugin-transform-regenerator": "^7.18.6", 
        "@babel/plugin-transform-reserved-words": "^7.18.6", 
        "@babel/plugin-transform-shorthand-properties": "^7.18.6", 
        "@babel/plugin-transform-spread": "^7.19.0",                    
        "@babel/plugin-transform-sticky-regex": "^7.18.6", 
        "@babel/plugin-transform-template-literals": "^7.18.9", 
        "@babel/plugin-transform-typeof-symbol": "^7.18.9", 
        "@babel/plugin-transform-unicode-escapes": "^7.18.10", 
        "@babel/plugin-transform-unicode-regex": "^7.18.6", 
        "@babel/preset-modules": "^0.1.5", 
        "@babel/types": "^7.19.3", 
        "babel-plugin-polyfill-corejs2": "^0.3.3", 
        "babel-plugin-polyfill-corejs3": "^0.6.0", 
        "babel-plugin-polyfill-regenerator": "^0.4.1", 
        "core-js-compat": "^3.25.1", 
        "semver": "^6.3.0" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/preset-env/node_modules/semver": { 
      "version": "6.3.0", 
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz", 
      "integrity": "sha512-
b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeU wu5HHTw==", 
      "bin": { 
        "semver": "bin/semver.js" 
      } 
    }, 
    "node_modules/@babel/preset-modules": { 
      "version": "0.1.5", 
      "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.5.tgz",       
                                                                                                                                                                                           
      "integrity": "sha512-
A57th6YRG7oR3cq/yt/Y84MvGgE0eJG2F1JLhKuyG+jFxEgrd/HAMJatiFtmOiZurz+0DkrvbheCLaV5f2Jf jA==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.0.0", 
        "@babel/plugin-proposal-unicode-property-regex": "^7.4.4", 
        "@babel/plugin-transform-dotall-regex": "^7.4.4", 
        "@babel/types": "^7.4.4", 
        "esutils": "^2.0.2" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/preset-react": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/preset-react/-/preset-react-7.18.6.tgz", 
      "integrity": "sha512-
zXr6atUmyYdiWRVLOZahakYmOBHtWc2WGCkP8PYTgZi0iJXDY2CN180TdrIW4OGOAdLc7TifzDIv tx6izaRIzg==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6", 
        "@babel/helper-validator-option": "^7.18.6", 
        "@babel/plugin-transform-react-display-name": "^7.18.6", 
        "@babel/plugin-transform-react-jsx": "^7.18.6", 
        "@babel/plugin-transform-react-jsx-development": "^7.18.6",         "@babel/plugin-transform-react-pure-annotations": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    },                                                                  
    "node_modules/@babel/preset-typescript": { 
      "version": "7.18.6", 
      "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.18.6.tgz", 
      "integrity": "sha512-
s9ik86kXBAnD760aybBucdpnLsAt0jK1xqJn2juOn9lkOvSHV60os5hxoVJsPzMQxvnUJFAlkont2DvvaYE BtQ==", 
      "dependencies": { 
        "@babel/helper-plugin-utils": "^7.18.6", 
        "@babel/helper-validator-option": "^7.18.6", 
        "@babel/plugin-transform-typescript": "^7.18.6" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      }, 
      "peerDependencies": { 
        "@babel/core": "^7.0.0-0" 
      } 
    }, 
    "node_modules/@babel/runtime": { 
      "version": "7.19.0", 
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.19.0.tgz", 
      "integrity": "sha512-
eR8Lo9hnDS7tqkO7NsV+mKvCmv5boaXFSZ70DnfhcgiEne8hv9oCEd36Klw74EtizEqLsy4YnW8UWwp BVolHZA==", 
      "dependencies": { 
        "regenerator-runtime": "^0.13.4" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      } 
    }, 
    "node_modules/@babel/runtime-corejs3": { 
      "version": "7.19.1", 
      "resolved": "https://registry.npmjs.org/@babel/runtime-corejs3/-/runtime-corejs3-7.19.1. tgz",   
                                                               
      "integrity": "sha512-
j2vJGnkopRzH+ykJ8h68wrHnEUmtK//E723jjixiAl/PPf6FhqY/vYRcMVlNydRKQjQsTsYEjpx+DZMIvnG k/g==", 
      "dependencies": { 
        "core-js-pure": "^3.25.1", 
        "regenerator-runtime": "^0.13.4" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      } 
    }, 
    "node_modules/@babel/template": { 
      "version": "7.18.10", 
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.18.10.tgz", 
      "integrity": "sha512-
TI+rCtooWHr3QJ27kJxfjutghu44DLnasDMwpDqCXVTal9RLp3RSYNh4NdBrRP2cQAoG9A8juOQl6P6 oZG4JxA==", 
      "dependencies": { 
        "@babel/code-frame": "^7.18.6", 
        "@babel/parser": "^7.18.10", 
        "@babel/types": "^7.18.10" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      } 
    }, 
    "node_modules/@babel/traverse": { 
      "version": "7.19.3", 
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.19.3.tgz", 
      "integrity": "sha512-
qh5yf6149zhq2sgIXmwjnsvmnNQC2iw70UFjp4olxucKrWd/dvlUsBI88VSLUsnMNF7/vnOiA+nk1+yLoC qROQ==", 
      "dependencies": { 
        "@babel/code-frame": "^7.18.6", 
        "@babel/generator": "^7.19.3", 
        "@babel/helper-environment-visitor": "^7.18.9",                    
        "@babel/helper-function-name": "^7.19.0", 
        "@babel/helper-hoist-variables": "^7.18.6", 
        "@babel/helper-split-export-declaration": "^7.18.6", 
        "@babel/parser": "^7.19.3", 
        "@babel/types": "^7.19.3", 
        "debug": "^4.1.0", 
        "globals": "^11.1.0" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      } 
    }, 
    "node_modules/@babel/types": { 
      "version": "7.19.3", 
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.19.3.tgz", 
      "integrity": "sha512-
hGCaQzIY22DJlDh9CH7NOxgKkFjBk0Cw9xDO1Xmh2151ti7wiGfQ3LauXzL4HP1fmFlTX6XjpRETTp Ucv7wQLw==", 
      "dependencies": { 
        "@babel/helper-string-parser": "^7.18.10", 
        "@babel/helper-validator-identifier": "^7.19.1", 
        "to-fast-properties": "^2.0.0" 
      }, 
      "engines": { 
        "node": ">=6.9.0" 
      } 
    }, 
    "node_modules/@bcoe/v8-coverage": { 
      "version": "0.2.3", 
      "resolved": "https://registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz", 
      "integrity": "sha512-
0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLx uSdnGPZtw==" 
    }, 
    "node_modules/@csstools/normalize.css": {                         
      "version": "12.0.0", 
      "resolved": "https://registry.npmjs.org/@csstools/normalize.css/-/normalize.css-12.0.0.tgz", 
      "integrity": "sha512-
M0qqxAcwCsIVfpFQSlGN5XjXWu8l5JDZN+fPt1LeW5SZexQTgnaEvgXAY+CeygRw0EeppWHi12JxE SWiWrB0Sg==" 
    }, 
    "node_modules/@csstools/postcss-cascade-layers": { 
      "version": "1.1.1", 
      "resolved": "https://registry.npmjs.org/@csstools/postcss-cascade-layers/-/postcss-cascade-layers1.1.1.tgz", 
      "integrity": "sha512-
+KdYrpKC5TgomQr2DlZF4lDEpHcoxnj5IGddYYfBWJAKfj1JtuHUIqMa+E1pJJ+z3kvDViWMqyqPlG4J a7amQA==", 
      "dependencies": { 
        "@csstools/selector-specificity": "^2.0.2", 
        "postcss-selector-parser": "^6.0.10" 
      }, 
      "engines": { 
        "node": "^12 || ^14 || >=16" 
      }, 
      "funding": { 
        "type": "opencollective", 
        "url": "https://opencollective.com/csstools" 
      }, 
      "peerDependencies": { 
        "postcss": "^8.2" 
      } 
    }, 
    "node_modules/@csstools/postcss-color-function": { 
      "version": "1.1.1", 
      "resolved": "https://registry.npmjs.org/@csstools/postcss-color-function/-/postcss-color-function1.1.1.tgz", 
      "integrity": "sha512-
Bc0f62WmHdtRDjf5f3e2STwRAl89N2CLb+9iAwzrv4L2hncrbDwnQD9PCq0gtAt7pOI2leIV08HIBUd4jx D8cw==", 
      "dependencies":                                                 
        "@csstools/postcss-progressive-custom-properties": "^1.1.0",         "postcss-value-parser": "^4.2.0" 
      }, 
      "engines": { 
        "node": "^12 || ^14 || >=16" 
      }, 
      "funding": { 
        "type": "opencollective", 
        "url": "https://opencollective.com/csstools" 
      }, 
      "peerDependencies": { 
        "postcss": "^8.2" 
      } 
    }, 
    "node_modules/@csstools/postcss-font-format-keywords": { 
      "version": "1.0.1", 
      "resolved": "https://registry.npmjs.org/@csstools/postcss-font-format-keywords/-/postcss-font-formatkeywords-1.0.1.tgz", 
      "integrity": "sha512-
ZgrlzuUAjXIOc2JueK0X5sZDjCtgimVp/O5CEqTcs5ShWBa6smhWYbS0x5cVc/+rycTDbjjzoP0KTDnUn eZGOg==", 
      "dependencies": { 
        "postcss-value-parser": "^4.2.0" 
      }, 
      "engines": { 
        "node": "^12 || ^14 || >=16" 
      }, 
      "funding": { 
        "type": "opencollective", 
        "url": "https://opencollective.com/csstools" 
      }, 
      "peerDependencies": { 
        "postcss": "^8.2" 
      } 
    },                                                                    
    "node_modules/@csstools/postcss-hwb-function": { 
      "version": "1.0.2", 
      "resolved": "https://registry.npmjs.org/@csstools/postcss-hwb-function/-/postcss-hwb-function1.0.2.tgz", 
      "integrity": "sha512-
YHdEru4o3Rsbjmu6vHy4UKOXZD+Rn2zmkAmLRfPet6+Jz4Ojw8cbWxe1n42VaXQhD3CQUXXTooIy8 OkVbUcL+w==", 
      "dependencies": { 
        "postcss-value-parser": "^4.2.0" 
      }, 
      "engines": { 
        "node": "^12 || ^14 || >=16" 
      }, 
      "funding": { 
        "type": "opencollective", 
        "url": "https://opencollective.com/csstools" 
      }, 
      "peerDependencies": { 
        "postcss": "^8.2" 
      } 
    }, 
    "node_modules/@csstools/postcss-ic-unit": { 
      "version": "1.0.1", 
      "resolved": "https://registry.npmjs.org/@csstools/postcss-ic-unit/-/postcss-ic-unit-1.0.1.tgz", 
      "integrity": "sha512-
Ot1rcwRAaRHNKC9tAqoqNZhjdYBzKk1POgWfhN4uCOE47ebGcLRqXjKkApVDpjifL6u2/55ekkpnFcp +s/OZUw==", 
      "dependencies": { 
        "@csstools/postcss-progressive-custom-properties": "^1.1.0",         "postcss-value-parser": "^4.2.0" 
      }, 
      "engines": { 
        "node": "^12 || ^14 || >=16" 
      }, 
      "funding": {                                                    
        "type": "opencollective", 
        "url": "https://opencollective.com/csstools" 
      }, 
      "peerDependencies": { 
        "postcss": "^8.2" 
      } 
    }, 
 
 
