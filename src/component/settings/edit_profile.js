import React from 'react';

import viewportUnit from 'viewport-units-buggyfill';
viewportUnit.init({force: true});

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.user.name,
            job:this.props.user.job,
            open:true
        }
    }
    handleSubmit(){
        this.setState({open:false})
        setTimeout(() => {
            this.props.clickOutside()
        }, 500);
    }
    handleCancel(){
        this.setState({open:false})
        setTimeout(() => {
            this.props.clickOutside()
        }, 500);
    }
    handleOnChange(type,value){
        switch(type){
            case "name": this.setState({name:value});break;
            case "job": this.setState({job:value});break;
        }

    }

    render(){
        return(
            <div className={this.state.open ? 'popup profile_setting_popup_effect' : 'popup profile_setting_popup_effect_de'}>
                <div className="setting_profile_whir scroll-y">
                    <h1>プロフィール変更</h1>
                    <div className="iconContainer">
                        <div className="flex-jus-center">
                            <div className="icon">

                            </div>
                        </div>
                        <p>アイコンを設定</p>
                    </div>
                    <div className="name_edit formInputWrap " style={{marginBottom:"10px"}}>
                        <div>名前</div>
                        <input type="text" placeholder="名前を入力（必須）" className="removeCss" value={this.state.name} onChange={(e) => this.handleOnChange("name",e.target.value)}/>
                    </div>
                    <div className="name_edit formInputWrap " style={{marginBottom:"10px"}}>
                        <div>職業</div>
                        <input type="text" placeholder="職業を入力（必須）" className="removeCss" value={this.state.job} onChange={(e) => this.handleOnChange("job",e.target.value)}/>
                    </div>
                    <div className="name_edit formTextareaWrap" style={{marginBottom:"10px"}}> 
                        <div>自己紹介</div>
                        <textarea placeholder="自己紹介を入力" className="removeTACss" rows="6"></textarea>
                    </div>
                    <div className="cancelBtn" onClick={() => this.handleCancel()}>
                        キャンセル
                    </div>
                    <div className="submitBtn" onClick={() => this.handleSubmit()}>
                        保存
                    </div>
                </div>
            </div>
        );
    }
  }
  
  
  export default Profile