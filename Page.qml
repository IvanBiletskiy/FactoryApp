import QtQuick 2.0
import QtQuick.Controls 1.2

Rectangle {
    id: page
    color: "black"
    anchors.fill: parent
    Button{
        id: backButton
        width: page.width/4
        height: width/1.5
        anchors.bottom: page.bottom
        anchrs.left: page.left
    }


}

