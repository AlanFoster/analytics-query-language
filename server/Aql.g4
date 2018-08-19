// The ANTLR grammar for AQL
grammar Aql;

// Parser rules start with a lower case letter, and lexer rules start with a capital letter

prog:
    SELECT
    selection
    FROM table
    extra_thing*
    EOF
    ;

extra_thing:
    WHERE predicateExpr  # predicate_branch
    | SINCE date     # since_branch
    | UNTIL date     # until_branch
    ;

selection:
    wildcard
    | selectionExpr (COMMA selectionExpr)*
    ;

predicateExpr:
    predicateExpr (STAR | DIVIDE) predicateExpr
    | predicateExpr (PLUS | MINUS) predicateExpr
    | predicateExpr (GREATER_THAN | GREATER_THAN_EQUALS | LESS_THAN | LESS_THAN_EQUALS) predicateExpr
    | predicateExpr (EQUAL | NOT_EQUAL) predicateExpr
    | predicateExpr AND predicateExpr
    | predicateExpr OR predicateExpr
    | predicateTerm
    ;

predicateTerm:
// there are no predicate funcs available
//    func
    column
    | INT
    | TRUE
    | FALSE
    | STRING
    | OPEN_PAREN predicateExpr CLOSE_PAREN
    ;

func:
     func_name OPEN_PAREN (wildcard | selectionExpr) CLOSE_PAREN
    ;

func_name: (COUNT | MAX | MIN) ;

selectionExpr:
    selectionExpr (STAR | DIVIDE) selectionExpr
    | selectionExpr (PLUS | MINUS) selectionExpr
    | selectionTerm
    ;

selectionTerm:
    func
    | column
    | INT
    | TRUE
    | FALSE
    | STRING
    | OPEN_PAREN selectionExpr CLOSE_PAREN
    ;

date:
    relativeDate
    | absoluteDate
    ;

relativeDate:
    day ( AT  time)?
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

// Function Names
COUNT : C O U N T;
MAX : M A X ;
MIN : M I N ;

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
