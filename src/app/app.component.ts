import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
selector: 'app-root',
imports: [RouterOutlet],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
title1 = "PERSONAL INFORMATION";
name = "NADINE KYLA OSTING";
age = 20;
gender = "Female";
date_of_birth = "October 18, 2004";
place_of_birth = "Alaminos City";
contact_number = "09662681759";
address = "Trancoville, Baguio City";

title2 = "EDUCATION";
college = "August 2023 - Present <br> Bachelor of Science in Computer Science <br> University of Baguio <br> Baguio City";
highschool = "June 8, 2023 <br> University of Baguio <br> Baguio City";
elemntary = "April 15, 2017 <br> Ednas School of Alaminos <br> Alaminos City";

title3 = "AWARDS & RECOGNITION";
award = "Piano Recital <br> Baguio Convention Center <br> Baguio City <br> August 2023";
champion = "Art Painting Competiton <br> Baguio Convention Center <br> Baguio City <br> September 2022";
second_runner_up = "2nd Runner Up <br> Spelling Quiz Bee <br> Ednas Shool of Alaminos <br> Alaminos City <br> December 4, 2016";

title4 = "SKILLS & TALENTS";
talent = "Painting, Playing the piano, Swimming";
}