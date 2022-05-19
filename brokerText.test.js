const brokerText = require('./brokerText');

const text = "In 1991, while studying computer science at University of Helsinki, Linus Torvalds began a project that later became the Linux kernel. He wrote the program specifically for the hardware he was using and independent of an operating system because he wanted to use the functions of his new PC with an 80386 processor. Development was done on MINIX using the GNU C Compiler.";
const finalText = 
`In 1991, while studying computer science
at University of Helsinki, Linus
Torvalds began a project that later
became the Linux kernel. He wrote the
program specifically for the hardware he
was using and independent of an
operating system because he wanted to
use the functions of his new PC with an
80386 processor. Development was done on
MINIX using the GNU C Compiler.`;

test('BrokerTest', () => {
    expect(brokerText(text, 40)).toEqual(finalText);
  });