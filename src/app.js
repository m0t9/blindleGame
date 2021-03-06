const gameDict = [
    'aaron', 'abaca', 'abaci', 'aback', 'abaft', 'abase', 'abash', 'abate', 'abbes', 'abbey',
    'abbot', 'abeam', 'abele', 'abhor', 'abide', 'abler', 'abode', 'abomb', 'abort', 'about',
    'above', 'abuse', 'abysm', 'abyss', 'acerb', 'acorn', 'acrid', 'actin', 'actor', 'acute',
    'adage', 'adams', 'adapt', 'added', 'adder', 'addle', 'adeem', 'adele', 'adept', 'adhoc',
    'adieu', 'adios', 'adman', 'admin', 'admit', 'admix', 'adobe', 'adopt', 'adore', 'adorn',
    'adown', 'adult', 'adyta', 'adzes', 'aegis', 'aeons', 'aerie', 'aesop', 'aetna', 'affix',
    'affry', 'afire', 'aflat', 'afoot', 'afore', 'afoul', 'afros', 'after', 'again', 'agape',
    'agate', 'agave', 'agaze', 'agent', 'agile', 'aging', 'aglet', 'agley', 'aglow', 'agony',
    'agree', 'agric', 'agues', 'ahead', 'aheap', 'ahold', 'aider', 'aimed', 'aired', 'aisle',
    'alack', 'alarm', 'album', 'alder', 'aleph', 'alert', 'aleut', 'algae', 'alias', 'alibi',
    'alice', 'alien', 'align', 'alike', 'aline', 'alive', 'alkyd', 'alkyl', 'allah', 'allay',
    'alley', 'alloc', 'allot', 'allow', 'alloy', 'aloes', 'aloft', 'aloha', 'alone', 'along',
    'aloof', 'aloud', 'alpha', 'altai', 'altar', 'alter', 'amain', 'amass', 'amaze', 'amber',
    'ambit', 'amble', 'ameba', 'amend', 'amide', 'amigo', 'amino', 'amiss', 'amity', 'amman',
    'among', 'amour', 'ample', 'amply', 'amuck', 'amuse', 'andes', 'anent', 'angel', 'anger',
    'angle', 'anglo', 'angry', 'angst', 'anile', 'anima', 'anion', 'anise', 'ankle', 'annal',
    'annex', 'annoy', 'annul', 'annum', 'anode', 'anomy', 'antic', 'antra', 'antsy', 'anvil',
    'aorta', 'apace', 'apall', 'apart', 'apeak', 'apeal', 'apear', 'apend', 'aphid', 'apnea',
    'aport', 'appal', 'apple', 'apply', 'apres', 'april', 'apron', 'aprox', 'aptly', 'aquit',
    'arbor', 'ardor', 'areal', 'areas', 'arena', 'argon', 'argot', 'argue', 'aries', 'arise',
    'arity', 'armed', 'armor', 'aroma', 'arprt', 'arras', 'array', 'arrow', 'arson', 'artel',
    'aryan', 'ashen', 'ashes', 'asian', 'aside', 'asked', 'asker', 'askew', 'aspen', 'aspic',
    'assay', 'asses', 'asset', 'assoc', 'asson', 'aster', 'astir', 'atilt', 'atlas', 'atoll',
    'atoms', 'atone', 'attar', 'attic', 'audio', 'audit', 'auger', 'aught', 'augur', 'aural',
    'auric', 'autos', 'auxin', 'avail', 'avast', 'avert', 'avian', 'avion', 'aviso', 'avoid',
    'await', 'awake', 'award', 'aware', 'awash', 'awful', 'axial', 'axing', 'axiom', 'aztec',
    'azure', 'babel', 'bacon', 'badge', 'badly', 'bagel', 'baggy', 'baize', 'baked', 'baker',
    'bales', 'balky', 'bally', 'balmy', 'balsa', 'bambi', 'banal', 'bandy', 'banjo', 'banks',
    'banns', 'barge', 'baron', 'basal', 'based', 'basic', 'basil', 'basin', 'basis', 'basso',
    'baste', 'batch', 'bated', 'bathe', 'baton', 'batty', 'baulk', 'bawdy', 'beach', 'beady',
    'beard', 'beast', 'beats', 'beech', 'beefy', 'befit', 'beget', 'begin', 'beige', 'being',
    'belch', 'belie', 'belle', 'bells', 'belly', 'below', 'bench', 'bends', 'beret', 'berne',
    'berry', 'berth', 'beryl', 'beset', 'besom', 'betel', 'bevel', 'bezel', 'bible', 'bidet',
    'bigot', 'bilge', 'bills', 'billy', 'binge', 'bingo', 'biped', 'birch', 'birth', 'bison',
    'bitch', 'black', 'blade', 'blame', 'bland', 'blank', 'blare', 'blase', 'blast', 'blaze',
    'bleak', 'blear', 'bleat', 'bleed', 'bleep', 'blend', 'bless', 'blimp', 'blind', 'blink',
    'bliss', 'bloat', 'block', 'blond', 'blood', 'bloom', 'blown', 'blues', 'bluff', 'blunt',
    'blurt', 'blush', 'board', 'boast', 'bobby', 'boged', 'boggy', 'bogus', 'bonds', 'boner',
    'bonus', 'booby', 'boost', 'booth', 'booty', 'booze', 'borax', 'bored', 'boric', 'borne',
    'boron', 'bosom', 'bossy', 'botch', 'bough', 'bound', 'bowel', 'bower', 'boxer', 'boyar',
    'brace', 'braid', 'brain', 'brake', 'brand', 'brant', 'brash', 'brass', 'brave', 'bravo',
    'brawl', 'bread', 'break', 'bream', 'breed', 'briar', 'bribe', 'brick', 'bride', 'brief',
    'brier', 'brine', 'bring', 'brink', 'briny', 'brisk', 'broad', 'broil', 'broke', 'brood',
    'brook', 'broom', 'broth', 'brown', 'brunt', 'brush', 'brute', 'bucks', 'bucky', 'buddy',
    'budge', 'buggy', 'bugle', 'buick', 'build', 'builk', 'built', 'bulge', 'bulky', 'bully',
    'bumpy', 'bunch', 'bungy', 'bunny', 'burke', 'burly', 'burma', 'burnt', 'burro', 'bursa',
    'burst', 'bushy', 'butte', 'butyl', 'buxom', 'buyer', 'bylaw', 'cabal', 'cabin', 'cable',
    'cacao', 'cache', 'caddy', 'cadet', 'cadre', 'cagey', 'cairo', 'caked', 'calve', 'calyx',
    'camel', 'cameo', 'canal', 'candy', 'canny', 'canoe', 'canon', 'canto', 'caper', 'capon',
    'carat', 'cared', 'caret', 'cargo', 'carol', 'carom', 'carry', 'carve', 'cased', 'cashe',
    'caste', 'casus', 'catch', 'cater', 'cathy', 'caulk', 'cause', 'cavil', 'ccitt', 'cease',
    'cecum', 'cedar', 'cello', 'chads', 'chafe', 'chaff', 'chain', 'chair', 'chalk', 'champ',
    'chant', 'chaos', 'charm', 'chart', 'chary', 'chase', 'chasm', 'cheap', 'cheat', 'chech',
    'check', 'cheek', 'cheep', 'cheer', 'chess', 'chest', 'chewy', 'chick', 'chide', 'chief',
    'child', 'chile', 'chill', 'chime', 'chimp', 'china', 'chink', 'chips', 'chirp', 'chive',
    'chloe', 'choir', 'choke', 'chomp', 'chops', 'chord', 'chore', 'chris', 'chubb', 'chuck',
    'chunk', 'churl', 'churn', 'chute', 'cider', 'cigar', 'cinch', 'civet', 'civic', 'civil',
    'clack', 'claim', 'clamp', 'clang', 'clank', 'clara', 'clash', 'clasp', 'class', 'clean',
    'clear', 'cleat', 'cleft', 'clerk', 'click', 'cliff', 'climb', 'cling', 'clink', 'cloak',
    'clock', 'clone', 'close', 'cloth', 'cloud', 'clout', 'clove', 'clown', 'cluck', 'clump',
    'clunk', 'coach', 'coast', 'coati', 'cobol', 'cobra', 'cocky', 'cocoa', 'coded', 'coder',
    'codes', 'colic', 'colon', 'color', 'colza', 'comer', 'comes', 'comet', 'comfy', 'comic',
    'comma', 'comms', 'condo', 'congo', 'conic', 'copal', 'copra', 'copse', 'coral', 'corny',
    'corps', 'costs', 'couch', 'cough', 'could', 'count', 'coupe', 'court', 'cover', 'covet',
    'covey', 'cower', 'cowle', 'coypu', 'crack', 'craft', 'crake', 'cramp', 'crane', 'crank',
    'craps', 'crash', 'crass', 'crate', 'crave', 'crawl', 'craze', 'crazy', 'creak', 'cream',
    'credo', 'creed', 'creek', 'creel', 'creep', 'crepe', 'crept', 'cress', 'crest', 'crete',
    'crick', 'crier', 'crime', 'crimp', 'crisp', 'croak', 'croat', 'crock', 'crook', 'croon',
    'crops', 'cross', 'croup', 'crowd', 'crown', 'crude', 'cruel', 'cruet', 'crumb', 'crump',
    'crush', 'crust', 'crypt', 'cspan', 'cuban', 'cubic', 'cubit', 'cuing', 'cupid', 'curbs',
    'curds', 'cured', 'cures', 'curia', 'curio', 'curly', 'curry', 'curse', 'curst', 'curve',
    'cushy', 'cutup', 'cycle', 'cynic', 'czech', 'dacha', 'daddy', 'daffy', 'daily', 'dairy',
    'daisy', 'dakar', 'dally', 'dance', 'dandy', 'dares', 'dated', 'dates', 'daunt', 'david',
    'davie', 'dayak', 'dazed', 'dealt', 'death', 'debar', 'debet', 'debit', 'debts', 'debug',
    'debut', 'decal', 'decay', 'decor', 'decoy', 'decry', 'defer', 'defog', 'deify', 'deign',
    'deism', 'deity', 'delay', 'delhi', 'delta', 'delve', 'demon', 'demur', 'dense', 'depot',
    'depth', 'derby', 'deter', 'devil', 'diary', 'dibit', 'diced', 'dicey', 'diego', 'digit',
    'dijon', 'dimly', 'dined', 'diner', 'dingy', 'diode', 'dirge', 'dirty', 'ditch', 'ditto',
    'ditty', 'divan', 'diver', 'dizzy', 'dodge', 'doggy', 'dogma', 'doing', 'dolly', 'donor',
    'doors', 'doped', 'dopey', 'doubt', 'dough', 'douse', 'dowdy', 'dowel', 'downy', 'dowry',
    'dozen', 'draft', 'drain', 'drake', 'drama', 'drape', 'drawl', 'dread', 'dream', 'dregs',
    'dress', 'dried', 'drier', 'drift', 'drill', 'drink', 'drive', 'droll', 'drone', 'drool',
    'droop', 'dross', 'drove', 'drown', 'drunk', 'dryer', 'dryly', 'dubai', 'ducal', 'ducat',
    'duchy', 'dukes', 'dumbo', 'dummy', 'dumps', 'dumpy', 'dunce', 'dures', 'durum', 'dusty',
    'dutch', 'dwarf', 'dwell', 'dwelt', 'dying', 'eager', 'eagle', 'early', 'earth', 'easel',
    'eaten', 'eater', 'eaves', 'ebony', 'eddie', 'edema', 'edgar', 'edges', 'edict', 'edify',
    'eerie', 'egret', 'egypt', 'eider', 'eight', 'eject', 'elain', 'eland', 'elate', 'elbow',
    'elder', 'elect', 'elegy', 'elena', 'elite', 'elope', 'elude', 'emale', 'embed', 'ember',
    'emend', 'emery', 'empty', 'enact', 'ended', 'endow', 'enema', 'enemy', 'enjoy', 'ennui',
    'ensue', 'enter', 'entry', 'envoy', 'epoch', 'epoxy', 'equal', 'equip', 'erase', 'erect',
    'ergot', 'ernst', 'erode', 'error', 'erupt', 'essay', 'essex', 'ether', 'ethic', 'ethyl',
    'etude', 'evade', 'event', 'every', 'evict', 'evoke', 'exact', 'exalt', 'excel', 'exert',
    'exile', 'exist', 'expel', 'extol', 'extra', 'exude', 'exult', 'exxon', 'fable', 'faced',
    'facer', 'facet', 'facia', 'facts', 'faded', 'fagot', 'faint', 'faire', 'fairy', 'faith',
    'faker', 'false', 'famed', 'fancy', 'farce', 'fares', 'farms', 'fatal', 'fated', 'fatty',
    'fault', 'fauna', 'favor', 'feast', 'fecal', 'feces', 'fedex', 'feign', 'feint', 'felon',
    'femur', 'fence', 'ferry', 'fetal', 'fetch', 'fetid', 'fetus', 'fever', 'fewer', 'fiber',
    'fibre', 'fiche', 'field', 'fiend', 'fiery', 'fifth', 'fifty', 'fight', 'filch', 'filed',
    'filer', 'filet', 'filly', 'filmy', 'filth', 'final', 'finch', 'fined', 'fines', 'fiord',
    'fires', 'firms', 'first', 'fishy', 'fitch', 'fited', 'fixed', 'fjord', 'flack', 'flags',
    'flail', 'flair', 'flaky', 'flame', 'flank', 'flare', 'flash', 'flask', 'fleck', 'fleet',
    'flesh', 'flier', 'fling', 'flint', 'flirt', 'float', 'flock', 'flood', 'floor', 'flops',
    'flora', 'flour', 'flout', 'flows', 'fluff', 'fluid', 'fluke', 'flunk', 'fluor', 'flush',
    'flute', 'flyer', 'foamy', 'focal', 'focus', 'foggy', 'foist', 'folic', 'folio', 'folks',
    'folly', 'foods', 'foray', 'force', 'forge', 'forgo', 'forma', 'forte', 'forth', 'forty',
    'forum', 'found', 'fount', 'foyer', 'frail', 'frame', 'franc', 'frank', 'fraud', 'freak',
    'fresh', 'friar', 'fried', 'frill', 'frisk', 'frock', 'frond', 'front', 'frost', 'froth',
    'frown', 'fruit', 'fudge', 'fuels', 'fugue', 'fully', 'fumes', 'funds', 'fungi', 'funky',
    'funny', 'furor', 'furry', 'fusil', 'fussy', 'fusty', 'fuzzy', 'gabby', 'gable', 'gabon',
    'gaffe', 'gaily', 'gains', 'gamma', 'gamut', 'gated', 'gates', 'gaudy', 'gauge', 'gaunt',
    'gauze', 'gauzy', 'gavel', 'gayly', 'geese', 'gelid', 'gemma', 'genie', 'genii', 'genre',
    'genue', 'genus', 'getup', 'ghost', 'ghoul', 'giant', 'giddy', 'gills', 'gipsy', 'girth',
    'given', 'glade', 'gland', 'glare', 'glass', 'glaze', 'gleam', 'glean', 'glide', 'glint',
    'gloat', 'globe', 'gloom', 'glork', 'glory', 'gloss', 'glove', 'gnarl', 'gnash', 'gnome',
    'goals', 'godly', 'going', 'gonad', 'goods', 'goofy', 'goose', 'gorge', 'gouge', 'gourd',
    'gouty', 'grace', 'grade', 'graft', 'grail', 'grain', 'grams', 'grand', 'grant', 'grape',
    'graph', 'grasp', 'grass', 'grate', 'grave', 'gravy', 'graze', 'great', 'grebe', 'greed',
    'greek', 'green', 'greet', 'grief', 'grill', 'grime', 'grind', 'gripe', 'grist', 'groan',
    'groin', 'gronk', 'groom', 'grope', 'gross', 'group', 'grove', 'growl', 'grown', 'gruel',
    'gruff', 'grump', 'grunt', 'guano', 'guard', 'guava', 'guess', 'guest', 'guffa', 'guide',
    'guild', 'guile', 'guilt', 'guise', 'gulch', 'gully', 'gumbo', 'gummy', 'gunny', 'guppy',
    'gusto', 'gusty', 'gypsy', 'habit', 'hades', 'hague', 'hails', 'hairs', 'hairy', 'haiti',
    'halve', 'hands', 'handy', 'hanoi', 'happy', 'harem', 'harsh', 'haste', 'hasty', 'hatch',
    'hated', 'haunt', 'haven', 'havoc', 'havre', 'hazel', 'hdwre', 'heady', 'heard', 'heart',
    'heath', 'heave', 'heavy', 'hedge', 'hefty', 'heigh', 'helix', 'hello', 'hence', 'henna',
    'heron', 'hertz', 'hicom', 'hider', 'hilly', 'hilus', 'hindi', 'hindu', 'hinge', 'hinny',
    'hired', 'hitch', 'hiway', 'hoard', 'hoary', 'hobby', 'hoist', 'holly', 'homey', 'honda',
    'honey', 'honor', 'hooky', 'hoped', 'hopes', 'horde', 'horny', 'horse', 'horsy', 'hotel',
    'hotly', 'hound', 'hours', 'house', 'hovel', 'hover', 'huffy', 'hullo', 'human', 'humid',
    'humor', 'humus', 'hunch', 'huron', 'hurry', 'husky', 'hussy', 'hutch', 'hydra', 'hyena',
    'hymen', 'hyper', 'hyrax', 'icand', 'ichor', 'icing', 'ideal', 'idiom', 'idiot', 'idler',
    'igloo', 'image', 'imbed', 'imbue', 'impel', 'imply', 'inane', 'incur', 'index', 'india',
    'inert', 'infer', 'infix', 'infra', 'ingot', 'inker', 'inlay', 'inlet', 'inner', 'input',
    'inset', 'insts', 'intel', 'inter', 'intra', 'intro', 'inure', 'iraqi', 'irate', 'irish',
    'irony', 'islam', 'issue', 'italy', 'items', 'ivory', 'jaggy', 'james', 'japan', 'jaunt',
    'jeans', 'jelly', 'jerky', 'jesus', 'jetty', 'jewel', 'jiffy', 'jinks', 'joint', 'joker',
    'jolly', 'joule', 'joust', 'judas', 'judge', 'juice', 'juicy', 'julia', 'julie', 'jumbo',
    'jumpy', 'junta', 'juror', 'kabul', 'kafka', 'kapok', 'kaput', 'karat', 'karma', 'kayak',
    'kbyte', 'keeps', 'kenai', 'kenya', 'keyed', 'khaki', 'kilos', 'kinda', 'kiosk', 'kitty',
    'kluge', 'knack', 'knave', 'knead', 'kneel', 'knell', 'knife', 'knock', 'knoll', 'knout',
    'known', 'koala', 'kodak', 'kongo', 'koran', 'korea', 'kraut', 'krona', 'kyoto', 'label',
    'labor', 'lacks', 'laden', 'ladle', 'lager', 'lagos', 'laity', 'lance', 'lands', 'lanky',
    'lapel', 'lapis', 'lapse', 'larch', 'large', 'larva', 'laser', 'lasso', 'lasts', 'latch',
    'later', 'latex', 'lathe', 'latin', 'laugh', 'layer', 'lazer', 'leads', 'leafy', 'leaky',
    'leant', 'leapt', 'learn', 'lease', 'leash', 'least', 'leave', 'ledge', 'leech', 'leery',
    'legal', 'lemma', 'lemon', 'lemur', 'lento', 'leper', 'letup', 'levee', 'level', 'lever',
    'levys', 'liana', 'liane', 'libel', 'libor', 'libra', 'libya', 'light', 'liked', 'liken',
    'likes', 'lilac', 'limbo', 'limes', 'limit', 'lined', 'linen', 'liner', 'lines', 'lingo',
    'lists', 'liter', 'lithe', 'litho', 'litre', 'lived', 'liven', 'liver', 'lives', 'livid',
    'llama', 'loans', 'loath', 'lobby', 'local', 'locus', 'lodge', 'lofty', 'logic', 'login',
    'logon', 'loner', 'loony', 'loops', 'loose', 'lorry', 'loser', 'lossy', 'lotsa', 'lotto',
    'lotus', 'louis', 'louse', 'lousy', 'loved', 'lover', 'lower', 'lowly', 'loyal', 'lucid',
    'lucky', 'lucre', 'lumpy', 'lunar', 'lunch', 'lunge', 'lupus', 'lurch', 'lurid', 'lusty',
    'lycee', 'lying', 'lymph', 'lynch', 'lyric', 'macaw', 'macro', 'madam', 'madly', 'mafia',
    'magic', 'maine', 'mains', 'maint', 'maize', 'major', 'maker', 'malay', 'malta', 'mammy',
    'maned', 'mange', 'mango', 'mangy', 'mania', 'manly', 'manna', 'manor', 'maple', 'march',
    'marks', 'maroc', 'marry', 'marsh', 'mason', 'masse', 'match', 'matin', 'mauve', 'maxim',
    'maybe', 'mayor', 'mbyte', 'mcorp', 'mealy', 'means', 'meaty', 'mecca', 'medal', 'media',
    'melon', 'mercy', 'merge', 'merit', 'merry', 'meson', 'messy', 'metal', 'meter', 'metre',
    'metro', 'miaow', 'micro', 'midas', 'midge', 'midst', 'might', 'milch', 'milky', 'mimic',
    'mince', 'minds', 'mined', 'miner', 'minis', 'minor', 'minus', 'mired', 'mirth', 'miser',
    'misty', 'miter', 'mitre', 'mixed', 'mixer', 'mocha', 'modal', 'model', 'modem', 'modes',
    'modus', 'mogul', 'moire', 'moist', 'molar', 'moldy', 'mommy', 'monad', 'money', 'monte',
    'month', 'mooch', 'moody', 'moose', 'moped', 'moral', 'moray', 'morel', 'mores', 'moron',
    'mossy', 'motel', 'motif', 'motor', 'motto', 'mould', 'moult', 'mound', 'mount', 'mourn',
    'mouse', 'mousy', 'mouth', 'moved', 'mover', 'movie', 'mower', 'moxie', 'msdos', 'mucus',
    'muddy', 'mufti', 'muggy', 'mulch', 'multi', 'mummy', 'mumps', 'munch', 'munge', 'mural',
    'murky', 'murre', 'mushy', 'music', 'musty', 'muted', 'myrrh', 'nadir', 'naiad', 'naive',
    'naked', 'named', 'names', 'nanny', 'nasal', 'nasty', 'natal', 'natch', 'natty', 'naval',
    'navel', 'needs', 'needy', 'negro', 'neigh', 'nepal', 'nerve', 'neuro', 'never', 'newly',
    'niche', 'niece', 'nifty', 'nighs', 'night', 'ninny', 'ninth', 'nippy', 'niter', 'nitre',
    'nixon', 'nobel', 'noble', 'nodde', 'nodes', 'noise', 'noisy', 'nomad', 'noose', 'norse',
    'north', 'nosey', 'notch', 'noted', 'notes', 'novel', 'noway', 'nudge', 'nurse', 'nutty',
    'nylon', 'nymph', 'oakum', 'oasis', 'obeah', 'obese', 'occam', 'occur', 'ocean', 'ocher',
    'ochre', 'octad', 'octal', 'octet', 'oddly', 'odour', 'offal', 'offer', 'often', 'ogive',
    'oiler', 'okapi', 'olden', 'older', 'olein', 'olive', 'omega', 'onion', 'onset', 'opera',
    'opium', 'optic', 'orate', 'orbit', 'order', 'organ', 'orion', 'ortho', 'osaka', 'osier',
    'osnaz', 'other', 'otter', 'ought', 'ouija', 'ounce', 'outdo', 'outer', 'ouzel', 'ovate',
    'overt', 'ovule', 'owing', 'owned', 'owner', 'oxeye', 'oxide', 'ozone', 'pacer', 'paddy',
    'padre', 'paean', 'pagan', 'paged', 'pager', 'pains', 'paint', 'palmy', 'palsy', 'pampa',
    'panda', 'panel', 'pangs', 'panic', 'pansy', 'pants', 'papal', 'papaw', 'paper', 'papua',
    'paras', 'parch', 'pared', 'parer', 'paris', 'parka', 'parma', 'parol', 'parry', 'parse',
    'parts', 'party', 'pasha', 'passe', 'pasta', 'paste', 'pasty', 'patch', 'paten', 'patio',
    'patsy', 'patty', 'paula', 'pause', 'paved', 'paver', 'pavis', 'payed', 'payee', 'payer',
    'peace', 'peach', 'pearl', 'peaty', 'pecan', 'pedal', 'peery', 'peeve', 'pekoe', 'pelve',
    'penal', 'pence', 'penis', 'penny', 'peony', 'peppy', 'pepsi', 'perch', 'percy', 'peril',
    'perky', 'pesky', 'petal', 'peter', 'petit', 'petty', 'pewit', 'phage', 'phase', 'phial',
    'phlox', 'phone', 'phono', 'phony', 'photo', 'phyla', 'phyto', 'piano', 'picky', 'picot',
    'piece', 'piety', 'piggy', 'piker', 'pilaf', 'pilot', 'pinch', 'pinko', 'pinon', 'pinto',
    'pinup', 'pious', 'piper', 'pipes', 'pipit', 'pique', 'pitch', 'pithy', 'piton', 'pivot',
    'pixel', 'pixie', 'pizza', 'place', 'plaid', 'plain', 'plait', 'plane', 'plank', 'plano',
    'plans', 'plant', 'plasm', 'plate', 'plato', 'plays', 'plaza', 'plead', 'pleat', 'plebe',
    'plebs', 'plena', 'pluck', 'plumb', 'plume', 'plump', 'plumy', 'plunk', 'plush', 'pluto',
    'poach', 'pocky', 'podia', 'poesy', 'poilu', 'point', 'poise', 'poked', 'poker', 'polar',
    'poler', 'polio', 'polit', 'polka', 'polus', 'polyp', 'ponce', 'pooch', 'poppy', 'popup',
    'porch', 'porgy', 'porky', 'porno', 'posed', 'poser', 'posit', 'posse', 'posts', 'pouch',
    'poult', 'pound', 'power', 'prank', 'prate', 'prawn', 'preen', 'press', 'prexy', 'price',
    'prick', 'pride', 'prier', 'prima', 'prime', 'primp', 'prink', 'print', 'prior', 'prise',
    'prism', 'prius', 'privy', 'prize', 'probe', 'profs', 'promo', 'promt', 'prone', 'prong',
    'proof', 'prose', 'prosy', 'proud', 'prove', 'prowl', 'proxy', 'prude', 'prune', 'psalm',
    'pshaw', 'psych', 'pucka', 'pudgy', 'puffy', 'puggy', 'pukka', 'puler', 'pulpy', 'pulse',
    'punch', 'pupae', 'pupal', 'pupil', 'puppy', 'puree', 'purge', 'purim', 'purse', 'pushy',
    'pussy', 'putty', 'pygmy', 'pylon', 'qatar', 'quack', 'quads', 'quaff', 'quail', 'quake',
    'quaky', 'qualm', 'quark', 'quart', 'quash', 'quasi', 'queen', 'queer', 'quell', 'query',
    'quest', 'queue', 'quick', 'quiet', 'quill', 'quilt', 'quint', 'quire', 'quirk', 'quirt',
    'quite', 'quits', 'quoin', 'quoit', 'quota', 'quote', 'quoth', 'rabbi', 'rabid', 'racer',
    'radar', 'radii', 'radio', 'radix', 'radon', 'rainy', 'raise', 'rajah', 'rajas', 'rally',
    'ralph', 'ramie', 'ramus', 'ranch', 'randy', 'ranee', 'range', 'rangy', 'raper', 'rapid',
    'raspy', 'rated', 'rater', 'rates', 'ratio', 'ratty', 'raved', 'ravel', 'raven', 'rawly',
    'rayon', 'razor', 'rcuit', 'reach', 'react', 'reads', 'ready', 'realm', 'rearm', 'rebel',
    'rebus', 'rebut', 'recto', 'recur', 'reedy', 'reeky', 'reeve', 'refer', 'refit', 'regal',
    'rehab', 'reich', 'reign', 'rekey', 'relax', 'relay', 'relic', 'relog', 'remit', 'renal',
    'renew', 'repay', 'repel', 'reply', 'reran', 'rerun', 'reset', 'resin', 'retch', 'retie',
    'retry', 'reuse', 'revel', 'revet', 'revue', 'rhine', 'rhyme', 'ridel', 'rider', 'ridge',
    'rifle', 'right', 'rigid', 'rigor', 'rinse', 'ripen', 'risen', 'riser', 'rises', 'risks',
    'risky', 'rival', 'river', 'rivet', 'roach', 'roads', 'roast', 'robin', 'robot', 'rocky',
    'rodeo', 'roger', 'roget', 'rogue', 'roman', 'romeo', 'rondo', 'roomy', 'roost', 'rosin',
    'rotor', 'rouge', 'rough', 'round', 'rouse', 'route', 'rover', 'rowan', 'rowdy', 'rower',
    'royal', 'ruble', 'ruddy', 'rugby', 'ruins', 'ruled', 'ruler', 'rules', 'rumba', 'rumen',
    'rumor', 'runic', 'rupee', 'rural', 'rusty', 'rythm', 'saber', 'sabin', 'sable', 'sabra',
    'sabre', 'sacra', 'sadly', 'safer', 'saint', 'saith', 'saker', 'salad', 'sales', 'salle',
    'sally', 'salon', 'salsa', 'salty', 'salve', 'salvo', 'samoa', 'sandy', 'sankt', 'santa',
    'sappy', 'saran', 'sarge', 'saris', 'sassy', 'satan', 'sated', 'sates', 'satin', 'satyr',
    'sauce', 'saucy', 'saudi', 'sauna', 'saute', 'saved', 'saver', 'saves', 'savor', 'savoy',
    'savvy', 'sawed', 'sawer', 'saxon', 'scads', 'scald', 'scale', 'scalp', 'scaly', 'scamp',
    'scams', 'scans', 'scant', 'scape', 'scare', 'scarf', 'scarp', 'scars', 'scary', 'scene',
    'scent', 'schmo', 'scion', 'scoff', 'scold', 'scone', 'scoop', 'scoot', 'scope', 'score',
    'scorn', 'scots', 'scour', 'scout', 'scowl', 'scrag', 'scram', 'scrap', 'scree', 'screw',
    'scrim', 'scrip', 'scrod', 'scrub', 'scuba', 'scuff', 'scull', 'sculp', 'seamy', 'secam',
    'sedan', 'sedge', 'sedgy', 'seedy', 'segue', 'seine', 'seize', 'semen', 'semis', 'senna',
    'senor', 'sense', 'seoul', 'sepal', 'sepia', 'septa', 'serge', 'serif', 'serum', 'serve',
    'servo', 'setae', 'setup', 'seven', 'sever', 'sewer', 'sexed', 'sexes', 'shack', 'shade',
    'shads', 'shady', 'shaft', 'shake', 'shaky', 'shale', 'shall', 'shaly', 'shame', 'shams',
    'shank', 'shape', 'shard', 'share', 'shark', 'sharp', 'shave', 'shawl', 'shawn', 'sheaf',
    'shear', 'sheen', 'sheep', 'sheer', 'sheet', 'sheik', 'shelf', 'shell', 'sheva', 'shiah',
    'shied', 'shies', 'shift', 'shill', 'shine', 'shins', 'shiny', 'shire', 'shirk', 'shirr',
    'shirt', 'shish', 'shiva', 'shivs', 'shoal', 'shoat', 'shock', 'shoed', 'shoes', 'shone',
    'shook', 'shoos', 'shoot', 'shops', 'shore', 'shorn', 'short', 'shots', 'shout', 'shove',
    'shown', 'shows', 'showy', 'shred', 'shrew', 'shrub', 'shrug', 'shuck', 'shunt', 'shush',
    'shute', 'shyly', 'sibyl', 'sided', 'sides', 'sidle', 'siege', 'sieve', 'sight', 'sigma',
    'signs', 'siler', 'silex', 'silky', 'silly', 'silty', 'simar', 'simia', 'sinai', 'since',
    'sinew', 'singe', 'sings', 'sinks', 'sinus', 'sioux', 'sired', 'siren', 'sires', 'sisal',
    'sissy', 'sitar', 'sited', 'sites', 'sitty', 'situp', 'situs', 'sixth', 'sixty', 'sized',
    'sizes', 'skald', 'skate', 'skeet', 'skein', 'skews', 'skied', 'skier', 'skies', 'skiff',
    'skill', 'skimp', 'skins', 'skirt', 'skive', 'skoal', 'skulk', 'skull', 'skunk', 'slack',
    'slain', 'slake', 'slang', 'slant', 'slash', 'slate', 'slats', 'slave', 'slavs', 'sleds',
    'sleek', 'sleep', 'sleet', 'slice', 'slick', 'slide', 'slime', 'slims', 'slimy', 'sling',
    'slink', 'slips', 'sloop', 'slope', 'slops', 'slosh', 'sloth', 'slued', 'slues', 'slump',
    'slung', 'slunk', 'slurp', 'slush', 'slyly', 'smack', 'small', 'smart', 'smash', 'smaze',
    'smear', 'smell', 'smelt', 'smile', 'smirk', 'smite', 'smith', 'smock', 'smoke', 'smoky',
    'smote', 'smuts', 'snack', 'snafu', 'snail', 'snake', 'snaky', 'snare', 'snarl', 'snead',
    'sneak', 'sneer', 'snick', 'snide', 'sniff', 'snipe', 'snoop', 'snoot', 'snore', 'snort',
    'snout', 'snows', 'snowy', 'snuck', 'snuff', 'soaks', 'soapy', 'sober', 'socio', 'socle',
    'sodas', 'sodom', 'sofia', 'softy', 'soggy', 'soils', 'solar', 'soles', 'solid', 'solon',
    'solos', 'solve', 'sonar', 'sonic', 'sonny', 'sooty', 'sophs', 'soppy', 'sores', 'sorgo',
    'sorry', 'sorts', 'sough', 'sound', 'soupy', 'sours', 'souse', 'south', 'sowed', 'sower',
    'space', 'spade', 'spain', 'spall', 'spank', 'spare', 'spark', 'spasm', 'spate', 'spawn',
    'speak', 'spear', 'speck', 'specs', 'speed', 'spell', 'spelt', 'spend', 'spent', 'sperm',
    'spica', 'spice', 'spick', 'spicy', 'spied', 'spiel', 'spies', 'spiff', 'spike', 'spiky',
    'spile', 'spill', 'spilt', 'spine', 'spins', 'spiny', 'spire', 'spiry', 'spite', 'spits',
    'spitz', 'splat', 'splay', 'split', 'spoil', 'spoke', 'spoof', 'spook', 'spool', 'spoon',
    'spoor', 'spore', 'sport', 'spots', 'spout', 'sprat', 'spray', 'spred', 'spree', 'sprig',
    'spuds', 'spume', 'spunk', 'spurn', 'spurt', 'sputa', 'squab', 'squad', 'squat', 'squaw',
    'squib', 'squid', 'stabs', 'stack', 'staff', 'stage', 'stags', 'stagy', 'staid', 'stain',
    'stair', 'stake', 'stale', 'stalk', 'stall', 'stamp', 'stand', 'stank', 'staph', 'stare',
    'stark', 'stars', 'start', 'stash', 'state', 'stave', 'stays', 'stead', 'steak', 'steal',
    'steam', 'steed', 'steel', 'steep', 'steer', 'stein', 'stele', 'stems', 'steno', 'stere',
    'stern', 'stets', 'steve', 'stews', 'stick', 'sties', 'stiff', 'stilb', 'stile', 'still',
    'stilt', 'sting', 'stink', 'stint', 'stirs', 'stoat', 'stock', 'stoic', 'stoke', 'stole',
    'stomp', 'stone', 'stony', 'stood', 'stool', 'stoop', 'store', 'stork', 'storm', 'story',
    'stout', 'stove', 'strap', 'straw', 'stray', 'strew', 'stria', 'strip', 'strop', 'strum',
    'strut', 'stubs', 'stuck', 'studs', 'study', 'stuff', 'stump', 'stung', 'stunk', 'stunt',
    'stupe', 'style', 'styli', 'stylo', 'suant', 'suave', 'sudan', 'sudra', 'sudsy', 'suede',
    'suety', 'sugar', 'suing', 'suint', 'suite', 'suits', 'sulfa', 'sulky', 'sully', 'sumac',
    'summa', 'sunny', 'sunup', 'super', 'supra', 'surfs', 'surfy', 'surge', 'surly', 'susan',
    'sutra', 'swage', 'swain', 'swale', 'swami', 'swamp', 'swank', 'swaps', 'swarf', 'swarm',
    'swart', 'swash', 'swath', 'swear', 'sweat', 'swede', 'sweep', 'sweet', 'swell', 'swept',
    'swift', 'swigs', 'swill', 'swims', 'swine', 'swing', 'swipe', 'swirl', 'swish', 'swiss',
    'swoon', 'swoop', 'sword', 'swore', 'sworn', 'swung', 'sylph', 'synod', 'syria', 'syrup',
    'tabby', 'table', 'taboo', 'tabor', 'tacit', 'tacky', 'taffy', 'taiga', 'taint', 'taker',
    'takes', 'talks', 'talky', 'tally', 'talon', 'talus', 'tamed', 'tamer', 'tamil', 'tango',
    'tangy', 'tanky', 'tansy', 'taped', 'taper', 'tapir', 'tardy', 'tarry', 'tarsi', 'tasks',
    'taste', 'tasty', 'tatar', 'taunt', 'tauto', 'tawny', 'taxed', 'taxes', 'taxis', 'teach',
    'teary', 'tease', 'teens', 'teeny', 'teeth', 'telco', 'telex', 'tempi', 'tempo', 'tempt',
    'tenet', 'tenon', 'tenor', 'tense', 'tenth', 'tepee', 'tepid', 'terms', 'terra', 'terse',
    'testy', 'tetra', 'texan', 'texas', 'thank', 'theft', 'their', 'theme', 'there', 'these',
    'theta', 'thews', 'thick', 'thief', 'thigh', 'thine', 'thing', 'think', 'third', 'thole',
    'thong', 'thorn', 'those', 'three', 'threw', 'throb', 'throe', 'throw', 'thrum', 'thumb',
    'thump', 'thunk', 'thurs', 'thyme', 'tiara', 'tiber', 'tibet', 'tibia', 'tidal', 'tiger',
    'tight', 'tilde', 'tiled', 'timed', 'timer', 'times', 'timid', 'tinge', 'tinny', 'tipsy',
    'tired', 'titan', 'tithe', 'title', 'titus', 'tizzy', 'toady', 'toast', 'today', 'toddy',
    'togae', 'tokay', 'toked', 'token', 'tokyo', 'tolls', 'tonal', 'toner', 'tonga', 'tongs',
    'tonic', 'tonne', 'tools', 'tooth', 'topaz', 'toper', 'topic', 'toque', 'torah', 'torch',
    'torsi', 'torso', 'torus', 'total', 'toted', 'totem', 'touch', 'tough', 'towel', 'tower',
    'toxic', 'toxin', 'trace', 'track', 'tract', 'trade', 'trail', 'train', 'trait', 'tramp',
    'trash', 'trave', 'trawl', 'tread', 'treat', 'treed', 'trend', 'tress', 'triad', 'trial',
    'tribe', 'trice', 'trick', 'tried', 'tries', 'trike', 'trill', 'trios', 'tripe', 'trite',
    'troll', 'troop', 'trope', 'troth', 'trout', 'trove', 'truce', 'truck', 'trued', 'truly',
    'trump', 'trunk', 'truss', 'trust', 'truth', 'tryst', 'tubal', 'tubby', 'tuber', 'tulip',
    'tulle', 'tumid', 'tummy', 'tumor', 'tuned', 'tuner', 'tunic', 'tunis', 'tunny', 'tuple',
    'tuque', 'turbo', 'turfy', 'turin', 'turns', 'tutor', 'twain', 'twang', 'tweak', 'tweed',
    'tweet', 'twerp', 'twice', 'twill', 'twine', 'twins', 'twirl', 'twist', 'tyler', 'typed',
    'typer', 'typic', 'uconn', 'udder', 'ugric', 'ulcer', 'ulnae', 'ulnar', 'ulnas', 'ultra',
    'umbel', 'umber', 'umbra', 'umiak', 'unapt', 'unary', 'unbar', 'uncap', 'uncle', 'uncut',
    'under', 'undid', 'undue', 'unfit', 'unfix', 'uniat', 'unify', 'union', 'unite', 'unity',
    'unlay', 'unlit', 'unltd', 'unman', 'unpin', 'unset', 'untie', 'until', 'unwed', 'unzip',
    'upend', 'upper', 'upset', 'urban', 'urine', 'usage', 'usair', 'users', 'usher', 'usual',
    'usurp', 'usury', 'uteri', 'utter', 'uvula', 'uzbek', 'vagal', 'vague', 'vagus', 'valet',
    'valid', 'valor', 'value', 'valve', 'vapid', 'vapor', 'vault', 'vegas', 'velar', 'venal',
    'venom', 'venus', 'verge', 'versa', 'verse', 'verve', 'vetch', 'vicar', 'video', 'vigil',
    'vigor', 'villa', 'vinic', 'vinyl', 'viola', 'viper', 'viral', 'virgo', 'virus', 'visit',
    'visor', 'vista', 'vital', 'vivid', 'vixen', 'vizor', 'vocal', 'voder', 'vodka', 'vogue',
    'voice', 'voile', 'volga', 'volvo', 'vomit', 'voted', 'voter', 'vouch', 'vowel', 'voxel',
    'vynil', 'wacky', 'waded', 'wader', 'wafer', 'wager', 'wages', 'wagon', 'wahoo', 'waist',
    'waive', 'waken', 'waled', 'wales', 'waltz', 'wampo', 'wanly', 'wants', 'wares', 'warty',
    'washy', 'waspy', 'waste', 'watch', 'water', 'watts', 'waved', 'waver', 'waves', 'waxed',
    'waxen', 'wears', 'weary', 'weave', 'wedge', 'weedy', 'weeny', 'weepy', 'weigh', 'weird',
    'welch', 'welds', 'wells', 'welsh', 'wench', 'wetly', 'whack', 'whale', 'wharf', 'wheal',
    'wheat', 'wheel', 'whelk', 'whelm', 'whelp', 'where', 'which', 'whiff', 'while', 'whine',
    'whiny', 'whirl', 'whirr', 'whirs', 'whisk', 'whist', 'white', 'whlse', 'whole', 'whomp',
    'whoof', 'whoop', 'whore', 'whorl', 'whose', 'whuff', 'widen', 'wider', 'widow', 'width',
    'wield', 'wince', 'winch', 'windy', 'winks', 'winze', 'wiped', 'wiper', 'wipes', 'wired',
    'wisky', 'wispy', 'witch', 'withe', 'witty', 'wives', 'woken', 'woman', 'women', 'woody',
    'woozy', 'words', 'wordy', 'works', 'world', 'wormy', 'worry', 'worse', 'worst', 'worth',
    'would', 'wound', 'wrack', 'wrath', 'wreak', 'wreck', 'wrest', 'wring', 'wrist', 'write',
    'wrong', 'wrung', 'wryly', 'wurst', 'xebec', 'xenon', 'xeric', 'xerox', 'xylem', 'yacht',
    'yahoo', 'yawed', 'yearn', 'years', 'yeast', 'yemen', 'yield', 'yodel', 'yoked', 'yokel',
    'yokes', 'young', 'yours', 'youth', 'yowls', 'yucca', 'yummy', 'zaire', 'zappy', 'zazen',
    'zebra', 'zener', 'zeros', 'zilch', 'zippy', 'zloty', 'zonal', 'zoned', 'zorch'
]

const state = {
    grid: Array(7).fill().map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
    secretWord: gameDict[Math.floor(Math.random() * gameDict.length)]
}

const animation_duration = 500;

function updateGrid() {
    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 5; col++) {
            const box = document.getElementById(`box${row}${col}`);
            box.textContent = state.grid[row][col];
        }
    }
}

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = letter;
    box.id = `box${row}${col}`;
    container.appendChild(box);
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 5; col++) {
            drawBox(grid, row, col);
        }
    }
    container.appendChild(grid);
}

function getCurrentWord() {
    return state.grid[state.currentRow].join('');
}

function isWordValid(word) {
    return gameDict.includes(word);
}

function addWord() {
    const row = state.currentRow;
    for (let col = 0; col < 5; col++) {
        const box = document.getElementById(`box${row}${col}`);
        setTimeout(() => {
            box.classList.add('awaiting');
        }, animation_duration / 2)
        box.classList.add('awaiting_animation')
    }
}

function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
    if (state.currentCol === 5) {
        return;
    }
    state.grid[state.currentRow][state.currentCol++] = letter;
}

function removeLetter() {
    if (state.currentCol === 0) {
        return;
    }
    state.grid[state.currentRow][--state.currentCol] = '';
}

function revealWord(row) {
    setTimeout(() => {
        let secret = Array();
        for (let ind = 0; ind < 5; ind++) {
            secret.push(state.secretWord[ind]);
        }
        for (let col = 0; col < 5; col++) {
            const box = document.getElementById(`box${row}${col}`);
            let letter = box.textContent;

            box.classList.remove('awaiting_animation');
            box.classList.remove('awaiting');

            if (secret[col] === letter) {
                box.classList.add('correct');
                secret[col] = '';
            } else if (!(secret.includes(letter))) {
                box.classList.add('failure');
            }
        }

        for (let col = 0; col < 5; col++) {
            const box = document.getElementById(`box${row}${col}`);
            let letter = box.textContent;

            if (box.classList.contains('failure') || box.classList.contains('correct')) {
                continue;
            }
            if (!secret.includes(letter)) {
                box.classList.add('failure');
            } else {
                box.classList.add('exists');
                for (let col2 = 0; col2 < 5; col2++) {
                    if (secret[col2] === letter) {
                        secret[col2] = '';
                        break;
                    }
                }
            }
        }
    }, animation_duration / 2)

    for (let col = 0; col < 5; col++) {
        const box = document.getElementById(`box${row}${col}`);
        box.classList.add('revealing_animation');
    }
}

function revealWords() {
    setTimeout(() => {
        for (let row = 0; row < 6; row++) {
            revealWord(row);
        }
    }, animation_duration)
}

function highlightWrongWord() {
    const row = state.currentRow;
    for (let col = 0; col < 5; col++) {
        const box = document.getElementById(`box${row}${col}`);
        box.classList.add('wrong');
    }
    setTimeout(() => {
        for (let col = 0; col < 5; col++) {
            const box = document.getElementById(`box${row}${col}`);
            box.classList.remove('wrong');
        }
    }, animation_duration);
}

function showGameResult() {
    const result = document.createElement('h1');
    if (state.grid[6].join('') === state.secretWord) {
        result.textContent = `Congratulations! You guessed the word!`.toLocaleUpperCase();
    } else {
        result.textContent = `You lose! The secret word was '${state.secretWord}'`.toLocaleUpperCase();
    }
    document.body.appendChild(result);
}

function registerKeyboardEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === "Enter") {
            if (state.currentRow === 7) {
                return;
            }
            if (state.currentCol === 5) {
                const word = getCurrentWord();
                if (isWordValid(word)) {
                    if (state.currentRow === 6) {
                        revealWord(6);
                        setTimeout(() => {
                            showGameResult();
                        }, animation_duration);
                        state.currentRow++;
                    } else {
                        addWord();
                        state.currentCol = 0;
                        state.currentRow++;
                        if (state.currentRow === 6) {
                            revealWords();
                        }
                    }
                } else {
                    highlightWrongWord();
                }
            }
        } else if (key === "Backspace") {
            removeLetter();
        } else if (isLetter(key)) {
            addLetter(key);
        }
        updateGrid();
    }
}

function startup() {
    const game = document.getElementById('game');
    drawGrid(game);
    registerKeyboardEvents();
}

startup();