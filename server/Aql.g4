// The ANTLR grammar for AQL
grammar Aql;

// Parser rules start with a lower case letter, and lexer rules start with a capital letter

prog:
    SELECT
    selection
    FROM table
    filters
    EOF
    ;

filters:
  filter*
  ;

filter:
  WHERE predicateExpr
  | SINCE date
  | UNTIL date
  | timeseries
  | facet
  ;

facet:
  FACET column
  ;

timeseries:
  TIMESERIES duration?
  ;

duration:
  timeDuration timeUnit
  ;

timeDuration:
  INT
  ;

timeUnit:
  MINUTES
  | HOURS
  | DAYS
  | WEEKS
  ;

selection:
    wildcard
    | selectionExpr (COMMA selectionExpr)*
    ;

predicateExpr:
    left=predicateExpr operator=(STAR | DIVIDE) right=predicateExpr # PredicateBinary
    | left=predicateExpr operator=(PLUS | MINUS) right=predicateExpr # PredicateBinary
    | left=predicateExpr operator=(GREATER_THAN | GREATER_THAN_EQUALS | LESS_THAN | LESS_THAN_EQUALS) right=predicateExpr # PredicateBinary
    | left=predicateExpr operator=(EQUAL | NOT_EQUAL) right=predicateExpr # PredicateBinary
    | left=predicateExpr operator=AND right=predicateExpr # PredicateBinary
    | left=predicateExpr operator=OR right=predicateExpr # PredicateBinary
    | predicateTerm # PredicateTermAlt
    ;

predicateTerm:
    column    # PredicateAtom
    | INT     # PredicateAtom
    | TRUE    # PredicateAtom
    | FALSE   # PredicateAtom
    | STRING  # PredicateAtom
    | OPEN_PAREN predicateExpr CLOSE_PAREN # PredicateNested
    ;

func:
     funcName OPEN_PAREN (wildcard | selectionExpr) CLOSE_PAREN
    ;

funcName: (COUNT | MAX | MIN | AVG | SUM) ;

selectionExpr:
    left=selectionExpr operator=(STAR | DIVIDE) right=selectionExpr # SelectionBinary
    | left=selectionExpr operator=(PLUS | MINUS) right=selectionExpr # SelectionBinary
    | selectionTerm # SelectionTermAlt
    ;

selectionTerm:
    func      # SelectionFunction
    | column  # SelectionAtom
    | INT     # SelectionAtom
    | TRUE    # SelectionAtom
    | FALSE   # SelectionAtom
    | STRING  # SelectionAtom
    | OPEN_PAREN selectionExpr CLOSE_PAREN # SelectionNested
    ;

date:
    relativeDate
    | absoluteDate
    ;

relativeDate:
    LAST? day ( AT  time)?
    ;

absoluteDate:
    STRING ;

day:
    TODAY
    | YESTERDAY
    | MONDAY
    | TUESDAY
    | WEDNESDAY
    | THURSDAY
    | FRIDAY
    | SATURDAY
    | SUNDAY
    ;

wildcard: STAR ;
time: STRING ;
table: IDENTIFIER  ;
column: IDENTIFIER ;

// Keywords
SELECT : S E L E C T ;
FROM : F R O M ;
SINCE : S I N C E ;
UNTIL : U N T I L ;
AT: A T ;
WHERE: W H E R E ;
LAST : L A S T ;

TRUE: 'true' ;
FALSE: 'false' ;

// Dates
TODAY: T O D A Y ;
YESTERDAY: Y E S T E R D A Y ;
MONDAY: M O N D A Y ;
TUESDAY: T U E S D A Y ;
WEDNESDAY: W E D N E S D A Y ;
THURSDAY: T H U R S D A Y ;
FRIDAY: F R I D A Y ;
SATURDAY: S A T U R D A Y ;
SUNDAY: S U N D A Y ;

// Time units - Note that the trailing S is optional
MINUTES: M I N U T E S? ;
HOURS: H O U R S? ;
DAYS: D A Y S? ;
WEEKS: W E E K S? ;

// Function Names
COUNT : C O U N T;
MAX : M A X ;
MIN : M I N ;
SUM : S U M ;
AVG : A V G ;
TIMESERIES: T I M E S E R I E S ;
FACET: F A C E T ;

AND: A N D ;
OR: O R ;

IDENTIFIER: [a-zA-Z] [a-zA-Z_0-9]* ;
INT: [0-9]+ ;

STRING: '\'' ~('\r' | '\n' | '\'')* '\'' ;

// Puncuation, explicitly named so that we can decide what to ignore during autosuggest

OPEN_PAREN: '(' ;
CLOSE_PAREN: ')' ;
STAR: '*' ;
DIVIDE: '/' ;
PLUS: '+' ;
MINUS: '-' ;
EQUAL: '=' ;
NOT_EQUAL: '!=' ;
GREATER_THAN: '>' ;
GREATER_THAN_EQUALS: '>=' ;
LESS_THAN: '<' ;
LESS_THAN_EQUALS: '<=' ;
COMMA: ',' ;

// Skip whitespaces and comments by default
COMMENT: '--' ~( '\r' | '\n' )* -> channel(HIDDEN) ;
WS: [ \t\n] -> channel(HIDDEN);

fragment A : [aA]; // match either an 'a' or 'A'
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];
