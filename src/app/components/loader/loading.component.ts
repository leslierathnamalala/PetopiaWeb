
import { Component, Input } from '@angular/core';

@Component({
	selector: 'loading',
	template: `		<div id="{{isShowBackground ? 'pause-off': 'pause'}}" class="d-flex align-items-center justify-content-center">
									<div class="dots"></div>
								</div>`,
	styleUrls: ['./loading.scss']
})

export class LoadingComponent {
	@Input() isShowBackground: boolean = false;
}