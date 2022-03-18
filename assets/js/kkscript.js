/*--------------------------------------------------------------
//                 KK Hospital Script                         //
--------------------------------------------------------------*/

var languageIsEng = false
$(window).on('load', function() {
    AOS.init({
        duration: 500,
        easing: "ease-in-out",
        once: true,
        mirror: false
    });
});

$(document).ready(function() {
    console.log("Welcome!");

    if (!languageIsEng) {
        changeLanguageTH()
    }

    /** --------------------- Navbar ---------------------  */
    $('#navbar>ul>li>a:not(#lang)').click(function(e) {
        e.preventDefault();
        $("#navbar>ul>li>a").removeClass("active-page");
        $(`#${$(this).attr('id')}`).addClass("active-page");
    });

    $('.bi-list').on('click', function() {
        if ($('#navbar').hasClass('navbar-mobile')) {
            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
            $('html').css('overflow', 'hidden');
        } else {
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
            $('html').css('overflow-x', 'initial');
        }
    });

    /** --------------------- Text navbar ---------------------  */
    $(window).scroll(function() {
        if ($("#header").hasClass("header-scrolled")) {
            $("#navbar>ul>li>a").removeClass("text-nav");
            $("#navbar>ul>li>a").addClass('text-nav-scrolled')
        } else {
            $("#navbar>ul>li>a").addClass('text-nav')
            $("#navbar>ul>li>a").removeClass('text-nav-scrolled')
        }
    });

    /** ------------------------------ 2 Language ------------------------------ */
    $('#lang').on('click', function(e) {
        e.preventDefault();
        if (!languageIsEng) {
            $(this).html(`EN <img src="assets/img/001-united-kingdom.png" alt="" style="width: 1rem; padding-left: 3px;">`)
            languageIsEng = true
            changeLanguageTH()
        } else {
            $(this).html(`TH <img src="assets/img/002-thailand.png" alt="" style="width: 1rem; padding-left: 3px;">`)
            languageIsEng = false
            changeLanguageEN()
        }
    });

    function changeLanguageTH() {
        $('#home').text('หน้าแรก');
        $('#services').text('บริการ');
        $('#doctors').text('แพทย์');
        $('#rules').text('กฎและข้อบังคับ');
        $('#about').text('เกี่ยวกับ');
        $('#submain-services').text('บริการ');
        $('#submain-doctors').text('แพทย์');
        $('#submain-rules').text('กฎและข้อบังคับ');
        $('#submain-about').text('เกี่ยวกับ');
        $('#wel-text').html(`ยินดีต้อนรับ`);
        $('#sub-wel-text').text('ขอให้วันนี้เป็นวันที่ดีสำหรับคุณในเมือง KK');
        $('#read-text').text('เพิ่มเติม');
        $('#about-text').html(`<h3>เกี่ยวกับเรา</h3><p>โชคดีนะ</p>`);
        $('#contacts-text').html(`                    
        <h4>ติดต่อ</h4>
        <p>
            ถนน Elgin Avenue บริเวรหมายเลข 277 <br> เมือง Southern San Andreas <br><br>
            <strong>เบอร์:</strong> 37891 [หัวหน้าแพทย์: Chart Sure]<br>
            <strong>อีเมล:</strong> khotkoolhospital@gmail.com <br>
        </p>`);
    }

    function changeLanguageEN() {
        $('#home').text('Home');
        $('#submain-services').text('Services');
        $('#submain-doctors').text('Doctors');
        $('#submain-rules').text('Rules');
        $('#submain-about').text('About');
        $('#services').text('Services');
        $('#doctors').text('Doctors');
        $('#rules').text('Rules');
        $('#about').text('About');
        $('#wel-text').html(`Welcome to <span>KK Hospital</span>`);
        $('#sub-wel-text').text('Have a good time in KK Town');
        $('#read-text').text('Read More');
        $('#about-text').html(`<h3>About Us</h3><p>Good luck</p>`);
        $('#contacts-text').html(`                    
        <h4>Contacts</h4>
        <p>
            Elgin Avenue 277 <br> Southern San Andreas <br><br>
            <strong>Phone:</strong> 37891 [Mr.Chart Sure]<br>
            <strong>Email:</strong> khotkoolhospital@gmail.com <br>
        </p>`);
    }
});