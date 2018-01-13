# Theory of Computation Sprint Challenge

## Regular Expressions

Find regexes that match the following.

* Regex that matches:

    - antelope
    - antelopes

    ### Answer
    ```regex
      /antelope[s]?/g
    ```

* Regex that matches:

    - goat
    - moat

    but not

    - boat

    ### Answer
    ```regex
      /[gm]oat/g
    ```

* Regex that matches dates in YYYY-MM-DD format. This does not need to
  verify the date is correct.

    - 2000-10-12
    - 1999-1-20
    - 1999-01-20
    - 812-2-10

    ### Answer
    This matches any year, months 1/01 - 12, and dates 1/01 - 31.

    ```regex
      /\d{1,4}-(1[0-2]|0[1-9]|[1-9])-((0[0-9]|[1-2][0-9]|3[01]|[1-9])([\s\r\n]|$))/g
    ```

## State Machines

> A useful tool for drawing state machines is [Evan's FSM
> Designer](http://madebyevan.com/fsm/).

* Draw a state machine that corresponds to the following regex:

      ab*c+d?[ef]

  Remember the ε transition can be used to move between states without
  consuming input.

  ### Answer

  ![Regex Machine](../RegexMachine.png?raw=true "Regex Machine")

* A lion can be sleeping, eating, hunting, or preening. Draw a state
  machine diagram for the lion and label the transition events that
  cause state transitions.

  ### Answer

  ![Lion Machine](../LionMachine.png?raw=true "Lion Machine")

* The VT-100 terminal (console) outputs text to the screen as it
  receives it over the wire. One exception is that when it receives an
  ESC character (ASCII 27), it goes into a special mode where it looks
  for commands to change its behavior. For example:

      ESC[12;45f

  moves the cursor to line 12, column 45.

      ESC[1m

  changes the font to bold.

  * Come up with regexes for the two above sequences. The one to set the
    cursor position should accept any digits for the row and column. The
    bold sequence need only accept `1` (and is a trivial regex). (ESC is
    a single character which can be represented with `\e` in the regex.)

  ### Answer

    ![asciiCommands](./asciiCommands.js)

  * Draw a state machine diagram for a VT-100 that can consume regular
    character sequences as well as the two above ESC sequences.

  ### Answer

  ![VT-100 Machine](../VT-100Machine.png?raw=true "VT-100 Machine")

> If you're curious, [here are all the VT-100 escape
> sequences](http://ascii-table.com/ansi-escape-sequences-vt-100.php).
> More common these days is a superset of VT-100 called [ANSI escape
> sequences](http://ascii-table.com/ansi-escape-sequences.php). If
> you've ever put colors and stuff in your Bash prompt, this is what you
> used to do it.
>
> One of your instructors was once hired to implement VT-100 emulation
> in an app, and they used a state machine to do it.
