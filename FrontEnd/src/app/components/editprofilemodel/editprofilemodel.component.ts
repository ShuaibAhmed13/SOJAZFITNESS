import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {userProfileService} from "../services/userProfile.service";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-editprofilemodel',
  templateUrl: './editprofilemodel.component.html',
  styleUrls: ['./editprofilemodel.component.scss']
})
export class EditprofilemodelComponent implements OnInit {
  @Input() selected: string = "";
  @Output() deselect: EventEmitter<string> = new EventEmitter<string>();
  error: string = "";
  inputData: string[] = [];
  @Input() editItem: any;

  constructor(private userProfileService: userProfileService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submitProfileForm(inputData: any){
    if(!inputData.valid){
      this.error = "Please fill all fields listed.";
      return
    }
    if (this.selected === 'editProfilePage' && this.editItem){
      this.userProfileService.UpdateUserProfile(this.editItem.id, {
        currentweight: inputData.value.currentweight,
        goalweight: inputData.value.goalweight,
        lifestyle: inputData.value.lifestyle,
        height: inputData.value.height

      }).subscribe( data => {
      }, message =>{
        console.log(message.error.text);
        this.toastr.success("Profile Edited!")
      });

    }
  }
}
