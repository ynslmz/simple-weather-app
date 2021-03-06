import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSliderModule } from "@angular/material/slider";
import { MatSortModule } from "@angular/material/sort";
import { WeatherRoutingModule } from "./weather-routing.module";
import { WeatherSearchComponent } from "./components/weather-search/weather-search.component";
import { WeatherHomeComponent } from "./pages/weather-home/weather-home.component";
import { CurrentWeatherViewerComponent } from "./components/current-weather-viewer/current-weather-viewer.component";
import { ForecastViewerComponent } from "./components/forecast-daily-viewer/forecast-daily-viewer.component";
import { StoreModule } from "@ngrx/store";
import { weatherReducer } from "./state/weather.reducer";
import { EffectsModule } from "@ngrx/effects";
import { WeatherEffects } from "./state/weather.effect";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { WeatherIconComponent } from "./components/weather-icon/weather-icon.component";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "src/app/shared/shared.module";
import { ForecastHourlyViewComponent } from "./components/forecast-hourly-view/forecast-hourly-view.component";

@NgModule({
  declarations: [
    WeatherSearchComponent,
    WeatherHomeComponent,
    CurrentWeatherViewerComponent,
    ForecastViewerComponent,
    WeatherIconComponent,
    ForecastHourlyViewComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherRoutingModule,
    SharedModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCardModule,
    MatSortModule,
    StoreModule.forFeature("weather", weatherReducer),
    EffectsModule.forFeature([WeatherEffects]),
  ],
})
export class WeatherModule {}
