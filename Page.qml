import QtQuick 2.0
import QtQuick.Controls 1.2

Item {
    id: page
    anchors.fill: parent
    Button{
        id: backButton
        width: page.width/4
        height: width/1.5
        anchors.bottom: page.bottom
        anchors.left: page.left
        text: "≺"
    }

    Button{
        id: menuButton
        width: page.width/4
        height: width/1.5
        anchors.bottom: page.bottom
        anchors.right: page.right
        text: "⋯"
    }


}

