var user_list = ['Joshua Blum', 'ajlerch', 'Alison McKenzie', 'Andie Howell', 'arup', 'Aviana Polsky', 'bhogan', 'Colin Sidoti', 'Kelsey Brigance', 'Brooks Reed', 'Aaron Burrow', 'Calvin French-Owen', 'cameronf', 'Camille DeJarnett', 'Chris Post', 'chazlin', 'Chyleigh Harmon', 'Chelsea Lyons', 'cmorley', 'Megan Cox', 'Charlotte Kirk', 'daniella', 'dannyh46', 'Dario G-D', 'Denis Bozic', 'ddersh', 'Forrest Diamond', 'David Wise', 'dneal', 'Debra Slutsky', 'David Stringfellow', 'dario  Yazdi', 'emma feshbach', 'Emily Obert', 'gconley', 'Grant Jordan', 'hardingm', 'hardison', 'hsi', 'Henry Skupniewicz', 'hummel', 'Ian Rust', 'iggy', 'Ilya Volodarsky', 'j_c', 'Jacob Bower', 'Jaron Colas', 'Jaime Reyes', 'John DiMino', 'Jonathan Surick', 'James Torres', 'Max Kanter', 'Kristen Wilhite', 'Karen Dubbin', 'Kelly Clonts', 'kimrein', 'krakauer', 'kvogt', 'Luke Johnson', 'lholland', 'liffrig', 'lkoblan', 'Lena Ziskin', 'Matt Gildner', 'Melina Tsitsiklis', 'merolish', 'Matt Luchette', 'millern', 'Monica Pate', 'nayden', 'Nolan Eastin', 'Nikki Neibloom', 'nickncf', 'njensen', 'Neha Patki', 'paigef', 'patsmad', 'petech', 'Darthur Petron', 'pkrein', 'proctor', 'Rishi Dixit', 'reyda', 'Leigh Rojeski', 'Sam Duffley', 'seferry', 'shirink', 'smike', 'smirz', 'sobel', 'ssunanda', 'supertim', 'Stephanie Wang', 'Sylvan Tsai', 'syverud', 'Tom Brown', 'tribbett', 'tsaxtonf', 'victor jakubiuk', 'yiou', 'zakubenn', 'Zachary Brooks', 'brian.syverud', 'conansaunders', 'Devin Dersh', 'Allie Jacobs', 'jamsmad', 'Justin Nelson', 'Aaron Blankstein', 'kempsonk', 'kimschwing22', 'konane', 'Megan Firko', 'nnasserghodsi', 'rachel.lee', 'Tim Dudley', 'Bonny Kellermann', 'erwade', 'gallup', 'mdf', 'migfer', 'nickle', 'rajini', 'tawanda', 'tsylla', 'zcahn', 'Darragh Buckley', 'DanBloom', 'Gordon', 'Nutbrain', 'alarice', 'alkesner.96', 'allanl', 'Rosanna Alegado', 'audreys', 'BEVERLY deSouza', 'bgentala', 'castor', 'Chiangkai Er', 'chevray.keiko', 'Pierre Chevray', 'davet', 'dkbdan', 'enwang', 'gaiainc', 'gargi', 'georgia', 'ghaff', 'holmesjc', 'jack_little', 'jmvidal', 'jonathan', 'James Pinkney', 'jramos', 'jsarkar', 'katyo', 'kenneth.kempson', 'keri', 'ko', 'Lebzylisbeth Gonzalez', 'leven', 'Lucy Tancredi', 'manowitz', 'melissa', 'mfeldman', 'muayyad', 'nazario', 'nhernandez', 'rajeevd', 'Jerry Rau', 'rhh', 'ricci', 'rrubenst', 'Rene Parra', 'setlur', 'shalabi', 'Steven Kleiman', 'sstrauss', 'storm', 'Valerie Horne (Delmar)', 'whs', 'zala', 'charles.y.lin@gmail.com', 'kelclonts@gmail.com', 'azsommer@mit.edu', 'meekerl@mit.edu', 'm_chan@mit.edu', 'rishiltms@gmail.com', 'alm13@mit.edu', 'alisonleighmckenzie@gmail.com', 'kyleavogt@gmail.com', 'erensila@mit.edu', 'boss@tooboss.com', 'chigga88@mit.edu', 'dannyhernandez@gmail.com', 'dmneal@gmail.com', 'cathy.melnikow@gmail.com', 'patsmad@gmail.com', 'psaracog@gmail.com', 'jsmadbec@princeton.edu', 'jmcannon@mit.edu', 'not.tim.dudley@gmail.com', '7733431285@vtext.com', 'helz@alum.mit.edu', 'juliaj@mit.edu', 'Marguerite Siboni', 'anneshen@mit.edu', 'kota715@mit.edu', 'jovonne1001@aol.com', 'melina@mit.edu', 'melina.tsitsiklis@gmail.com', 'geconley@gmail.com', 'tribbettz@gmail.com', 'kotamit14@gmail.com', 'paige@finkelstein.us', 'wjjohn@mit.edu', 'nobodycares333@yahoo.com', '8126061202@mms.att.net', 'cknapp16@mit.edu', 'sunanda.sharma.92@gmail.com', 'chelsea.lyons@gmail.com', 'reinpk@gmail.com', 'justinmathew@gmail.com', 'tsaxtonf@gmail.com', 'ilya@segment.io', 'smirzoeff@gmail.com', 'ptgodart@gmail.com', 'kdubbs@stanford.edu', 'vireliz@mit.edu', 'mosley@mit.edu', 'fishie@mit.edu', 'liv_kim@mit.edu', 'thenick3@gmail.com', 'ahslocum@mit.edu', 'helz@mit.edu', 'mchu827@mit.edu', 'jmackay@mit.edu', 'samweiss@mit.edu', 'vsharris@mit.edu', 'pmoran@mit.edu', 'hardison@alum.mit.edu', 'mfirko@mit.edu', 'ilab-reg@mit.edu', 'konane@mit.edu', 'jamsmad@mit.edu', 'tombrown@mit.edu', 'audreys@mit.edu', 'aliciap@mit.edu', 'zpcahn@gmail.com', 'mbright@mit.edu', 'kmcennis@mit.edu', 'grienne@mit.edu', 'connick@mit.edu', 'harelw@mit.edu', 'crazelli@mit.edu', 'kenneth.kempson@ge.com', 'mcs354@yahoo.com', 'thepenis@mit.edu', 'dspelke@mit.edu', 'kevin@kevconstruction.com', 'audrey@gwu.edu', 'polar086@gmail.com', 'grinich@mit.edu', 'mcennis@jhu.edu', 'ianr@mit.edu', 'darragh@mit.edu', 'msiboni@mit.edu', 'mbennie@mit.edu', 'blanks@mit.edu', 'ddenis@mit.edu', 'amas@mit.edu', 'service@youtube.com', 'brooksr@mbari.org', 'petron@apple.com', 'helz06@gmail.com', 'navinen@mit.edu', 'mgrinich@gmail.com', 'kmcennis@polysci.umass.edu', 'dpiemont@mit.edu', '4153412285@vtext.com', 'vireliz@gmail.com', 'roccop@mit.edu', 'proctorl@usa.redcross.org', 'kmcennis@gmail.com', 'aura6852@mit.edu', 'cjfroehlich47@gmail.com', 'peter.reinhardt.08@gmail.com', 'ionbro@gmail.com', 'laura.proctor@mathworks.com', 'cpmosley@semesteratsea.net', 'colleenmosley@gmail.com', 'natana@mit.edu', 'rob.a.hummel@gmail.com', 'Peter Godart', 'alopez1108@gmail.com', 'jinder1s@mit.edu', 'vmstiv@mit.edu', 'emnaemna@gmail.com', 'Aaron Zwiebach', 'Anthony Mark', 'Bennett Cyphers', 'blanks', 'Berk Ozturk', 'Christopher Knapp', 'Emma Christie', 'jinder1s', 'Katrina GUI', 'msiboni', 'tombrown', 'Victoria Stivanello', 'commericalproduction', 'not.tim.dudley']
var user_dict ={'alopez1108@gmail.com': 'alopez1108@gmail.com', 'leven': 'leven', 'castor': 'castor', 'Max Kanter': 'kanter', 'fishie@mit.edu': 'fishie@mit.edu', 'conansaunders': 'conansaunders', 'Dario G-D': 'dariogd', 'James Torres': 'jtorres9', 'proctorl@usa.redcross.org': 'proctorl@usa.redcross.org', 'Darragh Buckley': 'darragh', 'dpiemont@mit.edu': 'dpiemont@mit.edu', 'Debra Slutsky': 'dslu', 'meekerl@mit.edu': 'meekerl@mit.edu', 'petron@apple.com': 'petron@apple.com', 'roccop@mit.edu': 'roccop@mit.edu', 'Emily Obert': 'emobert', 'dmneal@gmail.com': 'dmneal@gmail.com', 'Luke Johnson': 'lbj16', 'hardingm': 'hardingm', 'Chyleigh Harmon': 'chyleigh', 'connick@mit.edu': 'connick@mit.edu', 'BEVERLY deSouza': 'bev', 'lholland': 'lholland', 'nickncf': 'nickncf', 'kdubbs@stanford.edu': 'kdubbs@stanford.edu', 'jmcannon@mit.edu': 'jmcannon@mit.edu', 'mcennis@jhu.edu': 'mcennis@jhu.edu', 'nnasserghodsi': 'nnasserghodsi', 'Nolan Eastin': 'neastin', 'Charlotte Kirk': 'cskirk', 'hsi': 'hsi', 'Pierre Chevray': 'chevray.pierre', 'Colin Sidoti': 'boss', 'crazelli@mit.edu': 'crazelli@mit.edu', 'tsaxtonf@gmail.com': 'tsaxtonf@gmail.com', 'Brooks Reed': 'brooksr8', 'not.tim.dudley': 'not.tim.dudley', 'audreys@mit.edu': 'audreys@mit.edu', 'georgia': 'georgia', 'Victoria Stivanello': 'vmstiv', 'katyo': 'katyo', 'tombrown': 'tombrown', 'erensila@mit.edu': 'erensila@mit.edu', 'hardison@alum.mit.edu': 'hardison@alum.mit.edu', 'reyda': 'reyda', 'kenneth.kempson': 'kenneth.kempson', 'kmcennis@polysci.umass.edu': 'kmcennis@polysci.umass.edu', 'alarice': 'alarice', 'shirink': 'shirink', 'mbright@mit.edu': 'mbright@mit.edu', '7733431285@vtext.com': '7733431285@vtext.com', 'tribbett': 'tribbett', 'Sylvan Tsai': 'sylvant', 'Rosanna Alegado': 'anolani', 'emma feshbach': 'eef', 'ptgodart@gmail.com': 'ptgodart@gmail.com', 'migfer': 'migfer', 'grienne@mit.edu': 'grienne@mit.edu', 'mfirko@mit.edu': 'mfirko@mit.edu', 'paige@finkelstein.us': 'paige@finkelstein.us', 'enwang': 'enwang', 'Jacob Bower': 'jbbower', 'Camille DeJarnett': 'camilled', 'nobodycares333@yahoo.com': 'nobodycares333@yahoo.com', 'jmvidal': 'jmvidal', 'kota715@mit.edu': 'kota715@mit.edu', 'liffrig': 'liffrig', 'gallup': 'gallup', 'chevray.keiko': 'chevray.keiko', '4153412285@vtext.com': '4153412285@vtext.com', 'Denis Bozic': 'dbozic', 'tawanda': 'tawanda', 'jonathan': 'jonathan', 'zcahn': 'zcahn', 'Jaime Reyes': 'jmreyes', 'Aaron Burrow': 'burrows', 'Aviana Polsky': 'avianap', 'cathy.melnikow@gmail.com': 'cathy.melnikow@gmail.com', 'Calvin French-Owen': 'calvinfo', 'ddersh': 'ddersh', 'Bonny Kellermann': 'bonnyk', 'Melina Tsitsiklis': 'melinat', 'Neha Patki': 'npatki', 'Anthony Mark': 'amark819', 'Lena Ziskin': 'lmziskin', 'wjjohn@mit.edu': 'wjjohn@mit.edu', 'whs': 'whs', 'nickle': 'nickle', 'kyleavogt@gmail.com': 'kyleavogt@gmail.com', 'dannyh46': 'dannyh46', 'merolish': 'merolish', 'dario  Yazdi': 'dxyazdi', 'kmcennis@gmail.com': 'kmcennis@gmail.com', 'kempsonk': 'kempsonk', 'Justin Nelson': 'jmnelson', 'ddenis@mit.edu': 'ddenis@mit.edu', 'samweiss@mit.edu': 'samweiss@mit.edu', 'colleenmosley@gmail.com': 'colleenmosley@gmail.com', 'kotamit14@gmail.com': 'kotamit14@gmail.com', 'nhernandez': 'nhernandez', 'navinen@mit.edu': 'navinen@mit.edu', 'ilya@segment.io': 'ilya@segment.io', 'geconley@gmail.com': 'geconley@gmail.com', 'kimrein': 'kimrein', 'davet': 'davet', 'melissa': 'melissa', 'jamsmad': 'jamsmad', 'seferry': 'seferry', 'tombrown@mit.edu': 'tombrown@mit.edu', 'mdf': 'mdf', 'natana@mit.edu': 'natana@mit.edu', 'Darthur Petron': 'petron', 'dkbdan': 'dkbdan', 'jsarkar': 'jsarkar', 'jack_little': 'jack_little', 'sstrauss': 'sstrauss', 'darragh@mit.edu': 'darragh@mit.edu', 'mchu827@mit.edu': 'mchu827@mit.edu', 'rrubenst': 'rrubenst', 'pmoran@mit.edu': 'pmoran@mit.edu', 'Valerie Horne (Delmar)': 'vadelmar', 'Rene Parra': 'rxparra', 'tsylla': 'tsylla', 'ionbro@gmail.com': 'ionbro@gmail.com', 'Matt Luchette': 'mfluchet', 'mosley@mit.edu': 'mosley@mit.edu', 'Sam Duffley': 'sduffley', 'ko': 'ko', 'millern': 'millern', 'ghaff': 'ghaff', 'rajini': 'rajini', 'Aaron Blankstein': 'kantai', 'arup': 'arup', 'nazario': 'nazario', 'setlur': 'setlur', 'alkesner.96': 'alkesner.96', 'patsmad@gmail.com': 'patsmad@gmail.com', 'hummel': 'hummel', 'Rishi Dixit': 'rdixit', 'Chris Post': 'ccpost', 'thenick3@gmail.com': 'thenick3@gmail.com', 'vireliz@gmail.com': 'vireliz@gmail.com', 'peter.reinhardt.08@gmail.com': 'peter.reinhardt.08@gmail.com', 'konane@mit.edu': 'konane@mit.edu', 'Kelly Clonts': 'kelonts', 'liv_kim@mit.edu': 'liv_kim@mit.edu', 'shalabi': 'shalabi', 'cmorley': 'cmorley', 'cameronf': 'cameronf', 'tribbettz@gmail.com': 'tribbettz@gmail.com', 'jamsmad@mit.edu': 'jamsmad@mit.edu', 'Nutbrain': 'Nutbrain', 'James Pinkney': 'jpinkney2112', 'konane': 'konane', 'helz06@gmail.com': 'helz06@gmail.com', 'harelw@mit.edu': 'harelw@mit.edu', 'msiboni@mit.edu': 'msiboni@mit.edu', 'jovonne1001@aol.com': 'jovonne1001@aol.com', 'service@youtube.com': 'service@youtube.com', 'paigef': 'paigef', 'Grant Jordan': 'gjordan', 'm_chan@mit.edu': 'm_chan@mit.edu', 'mgrinich@gmail.com': 'mgrinich@gmail.com', 'commericalproduction': 'commericalproduction', 'ahslocum@mit.edu': 'ahslocum@mit.edu', 'audrey@gwu.edu': 'audrey@gwu.edu', 'laura.proctor@mathworks.com': 'laura.proctor@mathworks.com', 'audreys': 'audreys', 'keri': 'keri', 'Emma Christie': 'emchris7', 'jinder1s': 'jinder1s', 'blanks': 'blanks', 'kelclonts@gmail.com': 'kelclonts@gmail.com', 'ajlerch': 'ajlerch', 'helz@alum.mit.edu': 'helz@alum.mit.edu', 'kvogt': 'kvogt', 'Megan Firko': 'mfirko', 'not.tim.dudley@gmail.com': 'not.tim.dudley@gmail.com', 'Christopher Knapp': 'cknapp16', 'nayden': 'nayden', 'vireliz@mit.edu': 'vireliz@mit.edu', 'msiboni': 'msiboni', 'helz@mit.edu': 'helz@mit.edu', 'lkoblan': 'lkoblan', 'chigga88@mit.edu': 'chigga88@mit.edu', 'syverud': 'syverud', 'hardison': 'hardison', 'njensen': 'njensen', 'rajeevd': 'rajeevd', 'tsaxtonf': 'tsaxtonf', 'chazlin': 'chazlin', 'ricci': 'ricci', 'Chelsea Lyons': 'cklyons', 'Ilya Volodarsky': 'ivolo', 'Jaron Colas': 'jcolas', 'David Wise': 'djwise', 'bhogan': 'bhogan', 'j_c': 'j_c', 'kimschwing22': 'kimschwing22', 'Steven Kleiman': 'srk', 'sunanda.sharma.92@gmail.com': 'sunanda.sharma.92@gmail.com', 'jsmadbec@princeton.edu': 'jsmadbec@princeton.edu', 'Kristen Wilhite': 'kdionne', 'melina@mit.edu': 'melina@mit.edu', 'Jonathan Surick': 'jsurick', 'Nikki Neibloom': 'neibloom', 'jinder1s@mit.edu': 'jinder1s@mit.edu', 'petech': 'petech', 'amas@mit.edu': 'amas@mit.edu', 'Alison McKenzie': 'aliemck', 'alisonleighmckenzie@gmail.com': 'alisonleighmckenzie@gmail.com', '8126061202@mms.att.net': '8126061202@mms.att.net', 'gconley': 'gconley', 'krakauer': 'krakauer', 'Lucy Tancredi': 'lucy_tancredi', 'DanBloom': 'DanBloom', 'zakubenn': 'zakubenn', 'brooksr@mbari.org': 'brooksr@mbari.org', 'mfeldman': 'mfeldman', 'daniella': 'daniella', 'pkrein': 'pkrein', 'sobel': 'sobel', 'supertim': 'supertim', 'rhh': 'rhh', 'justinmathew@gmail.com': 'justinmathew@gmail.com', 'rachel.lee': 'rachel.lee', 'muayyad': 'muayyad', 'Forrest Diamond': 'diamondf', 'smirzoeff@gmail.com': 'smirzoeff@gmail.com', 'Peter Godart': 'ptgodart', 'kenneth.kempson@ge.com': 'kenneth.kempson@ge.com', 'smirz': 'smirz', 'ianr@mit.edu': 'ianr@mit.edu', 'Zachary Brooks': 'zlbrooks', 'Megan Cox': 'coxmea', 'yiou': 'yiou', 'melina.tsitsiklis@gmail.com': 'melina.tsitsiklis@gmail.com', 'Devin Dersh': 'dcdersh', 'bgentala': 'bgentala', 'Matt Gildner': 'mattgmit', 'reinpk@gmail.com': 'reinpk@gmail.com', 'Aaron Zwiebach': 'aaronz', 'Karen Dubbin': 'kdubbs', 'proctor': 'proctor', 'dspelke@mit.edu': 'dspelke@mit.edu', 'jramos': 'jramos', 'Tom Brown': 'nottombrown', 'chelsea.lyons@gmail.com': 'chelsea.lyons@gmail.com', 'zpcahn@gmail.com': 'zpcahn@gmail.com', 'blanks@mit.edu': 'blanks@mit.edu', 'Stephanie Wang': 'swang93', 'jmackay@mit.edu': 'jmackay@mit.edu', 'Berk Ozturk': 'bozturk', 'psaracog@gmail.com': 'psaracog@gmail.com', 'Marguerite Siboni': 'margueritesiboni@gmail.com', 'rob.a.hummel@gmail.com': 'rob.a.hummel@gmail.com', 'victor jakubiuk': 'victorj', 'gaiainc': 'gaiainc', 'storm': 'storm', 'cpmosley@semesteratsea.net': 'cpmosley@semesteratsea.net', 'Chiangkai Er': 'changkai', 'patsmad': 'patsmad', 'alm13@mit.edu': 'alm13@mit.edu', 'Jerry Rau': 'rau', 'David Stringfellow': 'dstring', 'thepenis@mit.edu': 'thepenis@mit.edu', 'Monica Pate': 'mpate', 'Gordon': 'Gordon', 'vsharris@mit.edu': 'vsharris@mit.edu', 'Ian Rust': 'icrust', 'Andie Howell': 'andiejh', 'Leigh Rojeski': 'rojeski', 'aura6852@mit.edu': 'aura6852@mit.edu', 'manowitz': 'manowitz', 'iggy': 'iggy', 'kmcennis@mit.edu': 'kmcennis@mit.edu', 'dneal': 'dneal', 'polar086@gmail.com': 'polar086@gmail.com', 'holmesjc': 'holmesjc', 'vmstiv@mit.edu': 'vmstiv@mit.edu', 'azsommer@mit.edu': 'azsommer@mit.edu', 'Tim Dudley': 'tdudley', 'mbennie@mit.edu': 'mbennie@mit.edu', 'emnaemna@gmail.com': 'emnaemna@gmail.com', 'mcs354@yahoo.com': 'mcs354@yahoo.com', 'ilab-reg@mit.edu': 'ilab-reg@mit.edu', 'cknapp16@mit.edu': 'cknapp16@mit.edu', 'grinich@mit.edu': 'grinich@mit.edu', 'charles.y.lin@gmail.com': 'charles.y.lin@gmail.com', 'Katrina GUI': 'klhui', 'ssunanda': 'ssunanda', 'gargi': 'gargi', 'aliciap@mit.edu': 'aliciap@mit.edu', 'rishiltms@gmail.com': 'rishiltms@gmail.com', 'anneshen@mit.edu': 'anneshen@mit.edu', 'juliaj@mit.edu': 'juliaj@mit.edu', 'dannyhernandez@gmail.com': 'dannyhernandez@gmail.com', 'boss@tooboss.com': 'boss@tooboss.com', 'Lebzylisbeth Gonzalez': 'lebzy', 'brian.syverud': 'brian.syverud', 'erwade': 'erwade', 'John DiMino': 'jrdimino', 'Henry Skupniewicz': 'hskup', 'Bennett Cyphers': 'bcyphers', 'allanl': 'allanl', 'Kelsey Brigance': 'brigance', 'cjfroehlich47@gmail.com': 'cjfroehlich47@gmail.com', 'kevin@kevconstruction.com': 'kevin@kevconstruction.com', 'Joshua Blum': 'joshblum', 'smike': 'smike', 'Allie Jacobs': 'jacobs.allie', 'zala': 'zala'}