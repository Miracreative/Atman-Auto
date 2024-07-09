
<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';

$admin_mail = "hello@alwaysinplus.com";
$mail = new PHPMailer(true);
//From email address and name
$mail->CharSet = 'utf-8';
$mail->From = "hello@alwaysinplus.com";
$mail->FromName = "Message from alwaysin plus";
//To address and name

$mail->addAddress($admin_mail);

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Message from Feedbackform";
$mail->Body = '
        <p><i>What is the name of your company?</i> : <b>' . $_POST["company-name"] . '</b></p>
        <p><i>What is your role in the company?</i> : <b>' . $_POST["role"] . '</b></p>
        <p><i>Can you provide a brief overview of your company operations?</i> : <b>' . $_POST["operations"] . '</b></p>
        <p><i>What is the primary goal of this project?</i> : <b>' . $_POST["primary"] . '</b></p>
        <p><i>Who are the project main stakeholders?</i> : <b>' . $_POST["stakeholders"] . '</b></p>
        <p><i>What is the desired timeline for project completion?</i> : <b>' . $_POST["timeline"] . '</b></p>
        <p><i>Have you allocated a budget for this project? If so, what is the range?</i> : <b>' . $_POST["budget"] . '</b></p>
        <p><i>Location</i> : <b>' . $_POST["company-location"] . '</b></p>
        

        <p><i>Can you describe the project in detail?</i> : <b>' . $_POST["details"] . '</b></p>
        <p><i>What specific outcomes do you expect from this project?</i> : <b>' . $_POST["specific"] . '</b></p>
        <p><i>Are there any key deliverables? If so, what are they?</i> : <b>' . $_POST["deliverables"] . '</b></p>
        <p><i>What challenges are you currently facing that this project aims to address?</i> : <b>' . $_POST["challenges"] . '</b></p>
        <p><i>Are there any constraints or limitations we should be aware of (budget, time, resources)?</i> : <b>' . $_POST["constraints"] . '</b></p>
        <p><i>How will you measure the success of this project?</i> : <b>' . $_POST["measure"] . '</b></p>

        <p><i>What specific site locations are being considered for the mining farm?</i> : <b>' . $_POST["specific-locations"] . '</b></p>
        <p><i>Have any preliminary energy consumption studies been conducted for the site(s)?</i> : <b>' . $_POST["energy"] . '</b></p>
        <p><i>What are the key infrastructure challenges (e.g., cooling systems, energy supply) we need to consider?</i> : <b>' . $_POST["infrastructure"] . '</b></p>
        <p><i>Are there any preferred vendors or technology partners for mining equipment?</i> : <b>' . $_POST["technology"] . '</b></p>
        <p><i>How will the energy requirement be met? Are there plans for renewable energy sources?</i> : <b>' . $_POST["requirement"] . '</b></p>
        <p><i>What scalability plans are in place for future expansion of the mining farm?</i> : <b>' . $_POST["scalability"] . '</b></p>

        <p><i>Are there existing architectural designs or blueprints for the mining farm?</i> : <b>' . $_POST["architectural"] . '</b></p>
        <p><i>How important are sustainability and environmental considerations in the construction design?</i> : <b>' . $_POST["sustainability"] . '</b></p>
        <p><i>What are the security requirements for the physical site?</i> : <b>' . $_POST["requirements"] . '</b></p>
        <p><i>Can you provide examples of mining farm designs that align with your vision?</i> : <b>' . $_POST["examples"] . '</b></p>
        <p><i>What are the key regulatory or zoning challenges anticipated for the construction?</i> : <b>' . $_POST["regulatory"] . '</b></p>
        <p><i>Will there be a need for community engagement or local government consultations?</i> : <b>' . $_POST["community"] . '</b></p>

        <p><i>What specific security measures are required for the mining hardware and site?</i> : <b>' . $_POST["security"] . '</b></p>
        <p><i>Are there environmental impact assessments completed or planned for the project?</i> : <b>' . $_POST["environmental"] . '</b></p>
        <p><i>How will compliance with local and national energy regulations be ensured?</i> : <b>' . $_POST["compliance"] . '</b></p>
        <p><i>What strategies are in place for managing the environmental footprint of the mining operation?</i> : <b>' . $_POST["strategies"] . '</b></p>
        <p><i>Are there any industry-specific compliance standards that must be met (e.g., electrical, construction)?</i> : <b>' . $_POST["industry-specific"] . '</b></p>

        <p><i>Who are the primary stakeholders in the mining farm project?</i> : <b>' . $_POST["stakeholders"] . '</b></p>
        <p><i>What communication plan is in place for coordinating with local authorities and communities?</i> : <b>' . $_POST["authorities"] . '</b></p>
        <p><i>How frequently do you require updates on construction progress and energy consumption metrics?</i> : <b>' . $_POST["frequently"] . '</b></p>
        <p><i>What are the main concerns of stakeholders regarding this project?</i> : <b>' . $_POST["regarding"] . '</b></p>
        <p><i>What is the contingency plan for delays or unforeseen challenges in construction or operation?</i> : <b>' . $_POST["contingency"] . '</b></p>

        <p><i>What operational model will the mining farm use (e.g., staffing, remote monitoring)?</i> : <b>' . $_POST["model"] . '</b></p>
        <p><i>How will ongoing maintenance of mining equipment and infrastructure be managed?</i> : <b>' . $_POST["managed"] . '</b></p>
        <p><i>Is there a plan for incorporating technological advancements or capacity expansion?</i> : <b>' . $_POST["advancements"] . '</b></p>
        <p><i>How will the mining farm adapt to changes in cryptocurrency regulations or market conditions?</i> : <b>' . $_POST["cryptocurrency"] . '</b></p>
        <p><i>What is the long-term vision for the mining farm over the next 5 to 10 years?</i> : <b>' . $_POST["vision"] . '</b></p>
        
        <br/>
        <sub>Send : ' . date("d-m-Y H:i:s") . '</sub>';
$mail->AltBody = ' E-mail : ' . $_POST["email4"];

try {
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

