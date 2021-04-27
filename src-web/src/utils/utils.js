function InputStream(input) {
    var pos = 0, line = 1, col = 0;
    return {
        next: next,
        peek: peek,
        eof: eof,
        croak: croak,
    };
    function next() {
        var ch = input.chartAt(pos++);
        if (ch == "\n") line++, col = 0; else col++;
        return ch;
    }
    function peek() {
        return input.charAt(pos)
    }
    function eof() {
        return peek() == "";
    }
    function croak(msg) {
        throw new Error(msg + " (" + line + ":" + col + ")");
    }
}


function CharInputStream() {
    var current = null;
    InputStream.call(this, pos, line, col)

    return {
        next: next,
        peek: peek,
        eof: eof,
        croak: input.croak,
    }


    function read_string() {
        return { type: "str", value: read_escaped('"') };
    }

    function read_escaped(end) {
        var escaped = false, str = "";
        input.next();
        while (!input.eof()) {
            var ch = input.next();
            if (escaped) {
                str += ch;
                escaped = false;
            } else if (ch == "\\") {
                escaped = true;
            } else if (ch == end) {
                break;
            } else {
                str += ch;
            }
        }
        return str;
    }

    function is_reference(ch) {
        return " ".
    }

    function is_whitespace(ch) {
        return " \t\n".indexOf(ch) >= 0;
    }

    function read_while(predicate) {
        var str = "";
        while (!input.eof() && predicate(input.peek()))
            str += input.next();
        return str;
    }

    function read_next() {
        read_while(is_whitespace);
        if (input.eof()) return null;
        var ch = input.peek();
        if (ch == "#") {
            return check_reference(read_while);
        }
        if (ch == '"') return read_string();

        input.croak("Can't handle character: " + ch);
    }
    function peek() {
        return current || (current = read_next());
    }
    function next() {
        var tok = current;
        current = null;
        return tok || read_next();
    }
    function eof() {
        return peek() == null;
    }
}