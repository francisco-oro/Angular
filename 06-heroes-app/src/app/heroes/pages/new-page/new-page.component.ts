import {FormControl, FormGroup} from "@angular/forms";
import {Hero, Publisher} from "../../interfaces/hero.interface";
import {HeroesService} from "../../services/heroes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, switchMap, tap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', {nonNullable: true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ]

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (!this.router.url.includes('/edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroById(id))
      ).subscribe(hero => {
      if (!hero) return this.router.navigate(["/heroes/list"]);

      this.heroForm.reset(hero);
      return;
    });
  }

  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;
    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
        .subscribe({
          next: (hero: Hero) => {
            this.showSnackBar(`${hero.superhero} updated successfully.`);
          }
        });

      return;
    }
    this.heroesService.addHero(this.currentHero)
      .subscribe({
        next: (hero: Hero) => {
          this.router.navigate(['/heroes/edit', hero.id]);
          this.showSnackBar(`${hero.superhero} added successfully.`);
        }
      })
  }

  public onDeleteHero() {
    if (!this.currentHero.id) throw Error("Hero id is required");

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });
    dialogRef.afterClosed()
      .pipe(
        filter((result:boolean) => result),
        switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id)),
        filter((wasDeleted:boolean) => wasDeleted),
        tap(() => this.router.navigate(["/heroes/list"]))
      )
      .subscribe()
    // dialogRef.afterClosed().subscribe(result => {
    //   if(!result) return;
    //   this.heroesService.deleteHeroById(this.currentHero.id)
    //     .subscribe({
    //       next: (wasDeleted: Boolean) => {
    //         if (wasDeleted){
    //           this.router.navigate(["/heroes/list"]);
    //         }
    //       }
    //     });
    // });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'done', {
      duration: 2500
    });
  }
}
