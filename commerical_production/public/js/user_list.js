var user_list = ['Joshua Blum', 'ajlerch', 'Alison McKenzie', 'Andie Howell', 'arup', 'Aviana Polsky', 'bhogan', 'Colin Sidoti', 'Kelsey Brigance', 'Brooks Reed', 'Aaron Burrow', 'Calvin French-Owen', 'cameronf', 'Camille DeJarnett', 'Chris Post', 'chazlin', 'Chyleigh Harmon', 'Chelsea Lyons', 'cmorley', 'Megan Cox', 'Charlotte Kirk', 'daniella', 'dannyh46', 'Dario G-D', 'Denis Bozic', 'ddersh', 'Forrest Diamond', 'David Wise', 'dneal', 'Debra Slutsky', 'David Stringfellow', 'dario  Yazdi', 'emma feshbach', 'Emily Obert', 'gconley', 'Grant Jordan', 'hardingm', 'hardison', 'hsi', 'Henry Skupniewicz', 'hummel', 'Ian Rust', 'iggy', 'Ilya Volodarsky', 'j_c', 'Jacob Bower', 'Jaron Colas', 'Jaime Reyes', 'John DiMino', 'Jonathan Surick', 'James Torres', 'Max Kanter', 'Kristen Wilhite', 'Karen Dubbin', 'Kelly Clonts', 'kimrein', 'krakauer', 'kvogt', 'Luke Johnson', 'lholland', 'liffrig', 'lkoblan', 'Lena Ziskin', 'Matt Gildner', 'Melina Tsitsiklis', 'merolish', 'Matt Luchette', 'millern', 'Monica Pate', 'nayden', 'Nolan Eastin', 'Nikki Neibloom', 'nickncf', 'njensen', 'Neha Patki', 'paigef', 'patsmad', 'petech', 'Darthur Petron', 'pkrein', 'proctor', 'Rishi Dixit', 'reyda', 'Leigh Rojeski', 'Sam Duffley', 'seferry', 'shirink', 'smike', 'smirz', 'sobel', 'ssunanda', 'supertim', 'Stephanie Wang', 'Sylvan Tsai', 'syverud', 'Tom Brown', 'tribbett', 'tsaxtonf', 'victor jakubiuk', 'yiou', 'zakubenn', 'Zachary Brooks', 'brian.syverud', 'conansaunders', 'Devin Dersh', 'Allie Jacobs', 'jamsmad', 'Justin Nelson', 'Aaron Blankstein', 'kempsonk', 'kimschwing22', 'konane', 'Megan Firko', 'nnasserghodsi', 'rachel.lee', 'Tim Dudley', 'Bonny Kellermann', 'erwade', 'gallup', 'mdf', 'migfer', 'nickle', 'rajini', 'tawanda', 'tsylla', 'zcahn', 'Darragh Buckley', 'DanBloom', 'Gordon', 'Nutbrain', 'alarice', 'alkesner.96', 'allanl', 'Rosanna Alegado', 'audreys', 'BEVERLY deSouza', 'bgentala', 'castor', 'Chiangkai Er', 'chevray.keiko', 'Pierre Chevray', 'davet', 'dkbdan', 'enwang', 'gaiainc', 'gargi', 'georgia', 'ghaff', 'holmesjc', 'jack_little', 'jmvidal', 'jonathan', 'James Pinkney', 'jramos', 'jsarkar', 'katyo', 'kenneth.kempson', 'keri', 'ko', 'Lebzylisbeth Gonzalez', 'leven', 'Lucy Tancredi', 'manowitz', 'melissa', 'mfeldman', 'muayyad', 'nazario', 'nhernandez', 'rajeevd', 'Jerry Rau', 'rhh', 'ricci', 'rrubenst', 'Rene Parra', 'setlur', 'shalabi', 'Steven Kleiman', 'sstrauss', 'storm', 'Valerie Horne (Delmar)', 'whs', 'zala', 'charles.y.lin@gmail.com', 'kelclonts@gmail.com', 'azsommer@mit.edu', 'meekerl@mit.edu', 'm_chan@mit.edu', 'rishiltms@gmail.com', 'alm13@mit.edu', 'alisonleighmckenzie@gmail.com', 'kyleavogt@gmail.com', 'erensila@mit.edu', 'boss@tooboss.com', 'chigga88@mit.edu', 'dannyhernandez@gmail.com', 'dmneal@gmail.com', 'cathy.melnikow@gmail.com', 'patsmad@gmail.com', 'psaracog@gmail.com', 'jsmadbec@princeton.edu', 'jmcannon@mit.edu', 'not.tim.dudley@gmail.com', '7733431285@vtext.com', 'helz@alum.mit.edu', 'juliaj@mit.edu', 'Marguerite Siboni', 'anneshen@mit.edu', 'kota715@mit.edu', 'jovonne1001@aol.com', 'melina@mit.edu', 'melina.tsitsiklis@gmail.com', 'geconley@gmail.com', 'tribbettz@gmail.com', 'kotamit14@gmail.com', 'paige@finkelstein.us', 'wjjohn@mit.edu', 'nobodycares333@yahoo.com', '8126061202@mms.att.net', 'cknapp16@mit.edu', 'sunanda.sharma.92@gmail.com', 'chelsea.lyons@gmail.com', 'reinpk@gmail.com', 'justinmathew@gmail.com', 'tsaxtonf@gmail.com', 'ilya@segment.io', 'smirzoeff@gmail.com', 'ptgodart@gmail.com', 'kdubbs@stanford.edu', 'vireliz@mit.edu', 'mosley@mit.edu', 'fishie@mit.edu', 'liv_kim@mit.edu', 'thenick3@gmail.com', 'ahslocum@mit.edu', 'helz@mit.edu', 'mchu827@mit.edu', 'jmackay@mit.edu', 'samweiss@mit.edu', 'vsharris@mit.edu', 'pmoran@mit.edu', 'hardison@alum.mit.edu', 'mfirko@mit.edu', 'ilab-reg@mit.edu', 'konane@mit.edu', 'jamsmad@mit.edu', 'tombrown@mit.edu', 'audreys@mit.edu', 'aliciap@mit.edu', 'zpcahn@gmail.com', 'mbright@mit.edu', 'kmcennis@mit.edu', 'grienne@mit.edu', 'connick@mit.edu', 'harelw@mit.edu', 'crazelli@mit.edu', 'kenneth.kempson@ge.com', 'mcs354@yahoo.com', 'thepenis@mit.edu', 'dspelke@mit.edu', 'kevin@kevconstruction.com', 'audrey@gwu.edu', 'polar086@gmail.com', 'grinich@mit.edu', 'mcennis@jhu.edu', 'ianr@mit.edu', 'darragh@mit.edu', 'msiboni@mit.edu', 'mbennie@mit.edu', 'blanks@mit.edu', 'ddenis@mit.edu', 'amas@mit.edu', 'service@youtube.com', 'brooksr@mbari.org', 'petron@apple.com', 'helz06@gmail.com', 'navinen@mit.edu', 'mgrinich@gmail.com', 'kmcennis@polysci.umass.edu', 'dpiemont@mit.edu', '4153412285@vtext.com', 'vireliz@gmail.com', 'roccop@mit.edu', 'proctorl@usa.redcross.org', 'kmcennis@gmail.com', 'aura6852@mit.edu', 'cjfroehlich47@gmail.com', 'peter.reinhardt.08@gmail.com', 'ionbro@gmail.com', 'laura.proctor@mathworks.com', 'cpmosley@semesteratsea.net', 'colleenmosley@gmail.com', 'natana@mit.edu', 'rob.a.hummel@gmail.com', 'Peter Godart', 'alopez1108@gmail.com', 'aaronz@mit.edu', 'jinder1s@mit.edu', 'vmstiv@mit.edu', 'emchris7@mit.edu', 'Aaron Zwiebach', 'amark819', 'Bennett Cyphers', 'blanks', 'Berk Ozturk', 'Christopher Knapp', 'Emma Christie', 'jinder1s', 'Katrina GUI', 'msiboni', 'tombrown', 'Victoria Stivanello', '<devnull> car', 'commericalproduction', 'not.tim.dudley', 'LIST:btb-alum-request']
var user_dict ={'Jonathan Surick': 'jsurick', 'syverud': 'syverud', 'Calvin French-Owen': 'calvinfo', 'daniella': 'daniella', 'Debra Slutsky': 'dslu', 'John DiMino': 'jrdimino', 'Aviana Polsky': 'avianap', 'ianr@mit.edu': 'ianr@mit.edu', 'audreys@mit.edu': 'audreys@mit.edu', 'samweiss@mit.edu': 'samweiss@mit.edu', 'Sylvan Tsai': 'sylvant', 'smirzoeff@gmail.com': 'smirzoeff@gmail.com', 'proctor': 'proctor', 'Megan Firko': 'mfirko', 'jinder1s@mit.edu': 'jinder1s@mit.edu', 'Rene Parra': 'rxparra', 'Chyleigh Harmon': 'chyleigh', 'Kristen Wilhite': 'kdionne', 'kevin@kevconstruction.com': 'kevin@kevconstruction.com', 'leven': 'leven', 'mdf': 'mdf', 'Aaron Burrow': 'burrows', 'jamsmad@mit.edu': 'jamsmad@mit.edu', 'vireliz@mit.edu': 'vireliz@mit.edu', '8126061202@mms.att.net': '8126061202@mms.att.net', 'patsmad@gmail.com': 'patsmad@gmail.com', 'ilya@segment.io': 'ilya@segment.io', 'lkoblan': 'lkoblan', 'thenick3@gmail.com': 'thenick3@gmail.com', 'enwang': 'enwang', 'Denis Bozic': 'dbozic', 'Gordon': 'Gordon', 'tombrown': 'tombrown', 'Matt Luchette': 'mfluchet', 'amas@mit.edu': 'amas@mit.edu', 'Grant Jordan': 'gjordan', 'Luke Johnson': 'lbj16', 'msiboni': 'msiboni', 'mcennis@jhu.edu': 'mcennis@jhu.edu', 'ddenis@mit.edu': 'ddenis@mit.edu', 'victor jakubiuk': 'victorj', 'rob.a.hummel@gmail.com': 'rob.a.hummel@gmail.com', 'gaiainc': 'gaiainc', 'azsommer@mit.edu': 'azsommer@mit.edu', 'melissa': 'melissa', 'alarice': 'alarice', 'jmcannon@mit.edu': 'jmcannon@mit.edu', 'cameronf': 'cameronf', 'Jaron Colas': 'jcolas', 'reinpk@gmail.com': 'reinpk@gmail.com', 'zpcahn@gmail.com': 'zpcahn@gmail.com', 'dspelke@mit.edu': 'dspelke@mit.edu', 'laura.proctor@mathworks.com': 'laura.proctor@mathworks.com', 'supertim': 'supertim', 'manowitz': 'manowitz', 'DanBloom': 'DanBloom', 'James Pinkney': 'jpinkney2112', 'ko': 'ko', 'aliciap@mit.edu': 'aliciap@mit.edu', 'kvogt': 'kvogt', 'colleenmosley@gmail.com': 'colleenmosley@gmail.com', 'Steven Kleiman': 'srk', 'kempsonk': 'kempsonk', 'tsaxtonf': 'tsaxtonf', 'Rishi Dixit': 'rdixit', 'Henry Skupniewicz': 'hskup', 'iggy': 'iggy', 'mfeldman': 'mfeldman', 'brooksr@mbari.org': 'brooksr@mbari.org', 'James Torres': 'jtorres9', 'justinmathew@gmail.com': 'justinmathew@gmail.com', 'Rosanna Alegado': 'anolani', 'alkesner.96': 'alkesner.96', 'hardison': 'hardison', 'wjjohn@mit.edu': 'wjjohn@mit.edu', 'alm13@mit.edu': 'alm13@mit.edu', 'ahslocum@mit.edu': 'ahslocum@mit.edu', 'rrubenst': 'rrubenst', 'Katrina GUI': 'klhui', 'rajeevd': 'rajeevd', 'krakauer': 'krakauer', 'jsmadbec@princeton.edu': 'jsmadbec@princeton.edu', 'tombrown@mit.edu': 'tombrown@mit.edu', 'audreys': 'audreys', 'tsylla': 'tsylla', 'Aaron Zwiebach': 'aaronz', 'vmstiv@mit.edu': 'vmstiv@mit.edu', 'polar086@gmail.com': 'polar086@gmail.com', 'ilab-reg@mit.edu': 'ilab-reg@mit.edu', 'Kelsey Brigance': 'brigance', 'm_chan@mit.edu': 'm_chan@mit.edu', 'Darragh Buckley': 'darragh', 'zakubenn': 'zakubenn', 'Justin Nelson': 'jmnelson', 'Jaime Reyes': 'jmreyes', 'kimrein': 'kimrein', 'conansaunders': 'conansaunders', 'nickle': 'nickle', 'patsmad': 'patsmad', 'pmoran@mit.edu': 'pmoran@mit.edu', 'not.tim.dudley@gmail.com': 'not.tim.dudley@gmail.com', 'millern': 'millern', 'Andie Howell': 'andiejh', 'nazario': 'nazario', 'Stephanie Wang': 'swang93', 'darragh@mit.edu': 'darragh@mit.edu', 'jack_little': 'jack_little', 'bgentala': 'bgentala', 'rachel.lee': 'rachel.lee', 'crazelli@mit.edu': 'crazelli@mit.edu', 'blanks@mit.edu': 'blanks@mit.edu', 'BEVERLY deSouza': 'bev', 'erwade': 'erwade', 'emchris7@mit.edu': 'emchris7@mit.edu', 'Emma Christie': 'emchris7', 'gallup': 'gallup', 'helz@mit.edu': 'helz@mit.edu', 'dario  Yazdi': 'dxyazdi', 'gargi': 'gargi', 'sobel': 'sobel', 'davet': 'davet', 'erensila@mit.edu': 'erensila@mit.edu', 'merolish': 'merolish', 'Matt Gildner': 'mattgmit', 'holmesjc': 'holmesjc', 'kenneth.kempson': 'kenneth.kempson', 'Jacob Bower': 'jbbower', 'dannyh46': 'dannyh46', 'fishie@mit.edu': 'fishie@mit.edu', 'meekerl@mit.edu': 'meekerl@mit.edu', 'Charlotte Kirk': 'cskirk', 'sstrauss': 'sstrauss', 'nnasserghodsi': 'nnasserghodsi', 'hardison@alum.mit.edu': 'hardison@alum.mit.edu', 'grienne@mit.edu': 'grienne@mit.edu', 'ionbro@gmail.com': 'ionbro@gmail.com', 'grinich@mit.edu': 'grinich@mit.edu', 'ssunanda': 'ssunanda', 'tribbettz@gmail.com': 'tribbettz@gmail.com', 'aaronz@mit.edu': 'aaronz@mit.edu', 'paigef': 'paigef', 'LIST:btb-alum-request': 'LIST:btb-alum-request', 'jsarkar': 'jsarkar', 'cmorley': 'cmorley', 'proctorl@usa.redcross.org': 'proctorl@usa.redcross.org', 'mbennie@mit.edu': 'mbennie@mit.edu', 'Chris Post': 'ccpost', 'helz@alum.mit.edu': 'helz@alum.mit.edu', 'Tom Brown': 'nottombrown', 'Forrest Diamond': 'diamondf', 'Devin Dersh': 'dcdersh', 'petron@apple.com': 'petron@apple.com', 'anneshen@mit.edu': 'anneshen@mit.edu', 'ptgodart@gmail.com': 'ptgodart@gmail.com', 'Dario G-D': 'dariogd', 'kota715@mit.edu': 'kota715@mit.edu', 'chelsea.lyons@gmail.com': 'chelsea.lyons@gmail.com', 'Lebzylisbeth Gonzalez': 'lebzy', 'seferry': 'seferry', 'cknapp16@mit.edu': 'cknapp16@mit.edu', 'Colin Sidoti': 'boss', 'charles.y.lin@gmail.com': 'charles.y.lin@gmail.com', 'connick@mit.edu': 'connick@mit.edu', 'Camille DeJarnett': 'camilled', 'dmneal@gmail.com': 'dmneal@gmail.com', 'rhh': 'rhh', 'ddersh': 'ddersh', 'Peter Godart': 'ptgodart', 'juliaj@mit.edu': 'juliaj@mit.edu', 'mfirko@mit.edu': 'mfirko@mit.edu', 'alopez1108@gmail.com': 'alopez1108@gmail.com', 'Victoria Stivanello': 'vmstiv', 'pkrein': 'pkrein', 'Nikki Neibloom': 'neibloom', 'castor': 'castor', 'kmcennis@polysci.umass.edu': 'kmcennis@polysci.umass.edu', 'j_c': 'j_c', 'Nutbrain': 'Nutbrain', 'Berk Ozturk': 'bozturk', 'Monica Pate': 'mpate', 'zcahn': 'zcahn', 'jonathan': 'jonathan', 'boss@tooboss.com': 'boss@tooboss.com', 'Kelly Clonts': 'kelonts', 'melina.tsitsiklis@gmail.com': 'melina.tsitsiklis@gmail.com', 'konane': 'konane', 'nickncf': 'nickncf', 'allanl': 'allanl', 'emma feshbach': 'eef', 'Ian Rust': 'icrust', 'Pierre Chevray': 'chevray.pierre', 'Zachary Brooks': 'zlbrooks', 'rajini': 'rajini', 'konane@mit.edu': 'konane@mit.edu', 'nobodycares333@yahoo.com': 'nobodycares333@yahoo.com', 'peter.reinhardt.08@gmail.com': 'peter.reinhardt.08@gmail.com', 'cjfroehlich47@gmail.com': 'cjfroehlich47@gmail.com', 'Tim Dudley': 'tdudley', 'thepenis@mit.edu': 'thepenis@mit.edu', 'Sam Duffley': 'sduffley', 'jinder1s': 'jinder1s', 'Bonny Kellermann': 'bonnyk', 'David Wise': 'djwise', 'tsaxtonf@gmail.com': 'tsaxtonf@gmail.com', 'dannyhernandez@gmail.com': 'dannyhernandez@gmail.com', 'natana@mit.edu': 'natana@mit.edu', 'lholland': 'lholland', 'alisonleighmckenzie@gmail.com': 'alisonleighmckenzie@gmail.com', 'tribbett': 'tribbett', '7733431285@vtext.com': '7733431285@vtext.com', 'Marguerite Siboni': 'margueritesiboni@gmail.com', 'service@youtube.com': 'service@youtube.com', 'dpiemont@mit.edu': 'dpiemont@mit.edu', 'Christopher Knapp': 'cknapp16', 'storm': 'storm', 'psaracog@gmail.com': 'psaracog@gmail.com', 'zala': 'zala', 'njensen': 'njensen', 'Allie Jacobs': 'jacobs.allie', 'vsharris@mit.edu': 'vsharris@mit.edu', 'not.tim.dudley': 'not.tim.dudley', 'Melina Tsitsiklis': 'melinat', 'hsi': 'hsi', 'kdubbs@stanford.edu': 'kdubbs@stanford.edu', 'katyo': 'katyo', 'paige@finkelstein.us': 'paige@finkelstein.us', 'gconley': 'gconley', 'harelw@mit.edu': 'harelw@mit.edu', 'ghaff': 'ghaff', 'mgrinich@gmail.com': 'mgrinich@gmail.com', 'chevray.keiko': 'chevray.keiko', 'shirink': 'shirink', 'Darthur Petron': 'petron', 'Leigh Rojeski': 'rojeski', 'Chiangkai Er': 'changkai', 'Joshua Blum': 'joshblum', 'cathy.melnikow@gmail.com': 'cathy.melnikow@gmail.com', 'hardingm': 'hardingm', 'jmackay@mit.edu': 'jmackay@mit.edu', 'geconley@gmail.com': 'geconley@gmail.com', 'amark819': 'amark819', 'nhernandez': 'nhernandez', 'navinen@mit.edu': 'navinen@mit.edu', 'vireliz@gmail.com': 'vireliz@gmail.com', 'rishiltms@gmail.com': 'rishiltms@gmail.com', 'mchu827@mit.edu': 'mchu827@mit.edu', 'roccop@mit.edu': 'roccop@mit.edu', 'dneal': 'dneal', 'aura6852@mit.edu': 'aura6852@mit.edu', 'chigga88@mit.edu': 'chigga88@mit.edu', 'Bennett Cyphers': 'bcyphers', 'jmvidal': 'jmvidal', 'brian.syverud': 'brian.syverud', 'smike': 'smike', 'smirz': 'smirz', 'Lena Ziskin': 'lmziskin', 'liffrig': 'liffrig', 'sunanda.sharma.92@gmail.com': 'sunanda.sharma.92@gmail.com', 'melina@mit.edu': 'melina@mit.edu', 'audrey@gwu.edu': 'audrey@gwu.edu', 'keri': 'keri', 'jamsmad': 'jamsmad', 'whs': 'whs', 'liv_kim@mit.edu': 'liv_kim@mit.edu', 'setlur': 'setlur', 'Valerie Horne (Delmar)': 'vadelmar', 'David Stringfellow': 'dstring', 'Brooks Reed': 'brooksr8', 'kenneth.kempson@ge.com': 'kenneth.kempson@ge.com', 'Ilya Volodarsky': 'ivolo', 'mbright@mit.edu': 'mbright@mit.edu', 'jramos': 'jramos', 'mosley@mit.edu': 'mosley@mit.edu', 'petech': 'petech', 'Lucy Tancredi': 'lucy_tancredi', 'Chelsea Lyons': 'cklyons', 'yiou': 'yiou', 'msiboni@mit.edu': 'msiboni@mit.edu', 'kotamit14@gmail.com': 'kotamit14@gmail.com', 'shalabi': 'shalabi', 'Max Kanter': 'kanter', 'kimschwing22': 'kimschwing22', 'kyleavogt@gmail.com': 'kyleavogt@gmail.com', 'kelclonts@gmail.com': 'kelclonts@gmail.com', 'ajlerch': 'ajlerch', 'Jerry Rau': 'rau', 'hummel': 'hummel', 'helz06@gmail.com': 'helz06@gmail.com', 'Alison McKenzie': 'aliemck', 'georgia': 'georgia', '<devnull> car': '<devnull> car', 'arup': 'arup', '4153412285@vtext.com': '4153412285@vtext.com', 'Aaron Blankstein': 'kantai', 'commericalproduction': 'commericalproduction', 'kmcennis@mit.edu': 'kmcennis@mit.edu', 'cpmosley@semesteratsea.net': 'cpmosley@semesteratsea.net', 'Karen Dubbin': 'kdubbs', 'tawanda': 'tawanda', 'muayyad': 'muayyad', 'nayden': 'nayden', 'migfer': 'migfer', 'Emily Obert': 'emobert', 'bhogan': 'bhogan', 'reyda': 'reyda', 'Megan Cox': 'coxmea', 'chazlin': 'chazlin', 'Neha Patki': 'npatki', 'dkbdan': 'dkbdan', 'ricci': 'ricci', 'Nolan Eastin': 'neastin', 'blanks': 'blanks', 'jovonne1001@aol.com': 'jovonne1001@aol.com', 'kmcennis@gmail.com': 'kmcennis@gmail.com', 'mcs354@yahoo.com': 'mcs354@yahoo.com'}