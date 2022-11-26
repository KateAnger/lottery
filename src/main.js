let tickets = document.getElementById('tickets');



let generateTicketTable = () => {

    let pOne = document.createElement('p');
    pOne.innerHTML = "Hello World!"
    tickets.appendChild(pOne);

    return (tickets.innerHTML = ticketsData.map((x) => {
        let { id, day, date, imageNameMain, imageNameExtra, imageNameMainResult, imageNameExtraResult, src, firstElement, secondElement, thirdElement, fourthElement, fifthElement, sixthElement, seventhElement, eighthElement, ninthElement, tenthElement, eleventhElement, twelfthElement } = x;

        return `
        <tr>
            <td class="column1">
                ${day}<br>${date}
            </td>
            <td class="forgot">
                ${firstElement}
                    ${imageNameMain}
                ${secondElement}
                    ${imageNameMain}
                ${thirdElement}
            </td>
            <td class="forgot">
                ${fourthElement}
                    ${imageNameExtra}
                ${fifthElement}
                    ${imageNameExtra}
                ${sixthElement}
            </td>
            <td class="forgot">
                ${seventhElement}
                    ${imageNameMainResult}
                ${eighthElement}
                    ${imageNameMainResult}
                ${ninthElement}
            </td>
            <td class="forgot">
                ${tenthElement}
                    ${imageNameExtraResult}
                ${eleventhElement}
                    ${imageNameExtraResult}
                ${twelfthElement}
            </td>
        </tr>
        `;
    }).join(""))
    // }) //need to join with "" otherwise get a ',' in between elements)
}

generateTicketTable();


{/* <td>
<a class="thumb" href="#">
    ${imageNameExtraResult}
    <span class="imgLarge">
    ${imageNameExtraResult}
    </span>
</a>
</td> */}
