
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * RGB-Funk blocks
 */
//% weight=80 color=#FF3030 icon="" block="Funk RGB"
namespace custom {

    /**
     * RGB-Werte per Funk senden
     * @param r Rotwert, eg: 255
     * @param g Grünwert, eg: 255
     * @param b Blauwert, eg: 255
     */
    //% block
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    export function sendeRGB(r: number, g: number, b: number) {
        radio.sendValue("r", r)
        radio.sendValue("g", g)
        radio.sendValue("b", b)
    }
    /**
     * RGB-Werte per Funk Empfangen
     * @param value describe value here, eg: 5
     */
    //% block
    export function empfangeRGB() {
        let r;
        let g;
        let b;
        radio.onReceivedValue(function (name: "r", value: number) {
            r = value
        })
        radio.onReceivedValue(function (name: "g", value: number) {
            g = value
        })
        radio.onReceivedValue(function (name: "b", value: number) {
            b = value
        })
        return (basic.rgb(r, g, b))
    }
}
