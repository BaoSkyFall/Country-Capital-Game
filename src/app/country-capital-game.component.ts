import { ChangeDetectionStrategy, Component, Input, computed, signal } from "@angular/core";
type CountryCapitalRecord = {
    content: string;
    pairWith: string;
}
@Component({
    selector: 'app-country-capital-game',
    standalone: true,
    template: `
    <div class="grid h-screen w-screen grid-cols-6 items-center justify-center gap-4 p4 bg-gray-900">
    @if(hasWon())
    {
        <code class="col-span-2 col-start-3 text-center text-white">Congratulations!!</code>
    }
    @else {
        @for (record of records();track record) {
            <button class="px-4 py-2 rounded bg-gray-100 text-black"
            (click)="onClick(record)"
            [class.bg-blue-500]="selected()?.content === record.content"
            [class.bg-red-500]="wrongPair()[record.content]"
            >{{ record.content }} </button>
        }
    }
   </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class CountryCapitalGame {
    protected records = signal<CountryCapitalRecord[]>([]);
    protected selected = signal<CountryCapitalRecord | null>(null);
    protected wrongPair = signal<Record<string, boolean>>({});
    protected hasWon = computed(() => {
        return this.records().length === 0
    })
    @Input({ required: true }) set data(data: Record<string, string>) {
        const recordsValue: CountryCapitalRecord[] = [];
        console.log('data:', data);
        console.log('Object.entries(data):', Object.entries(data))
        for (let [country, capital] of Object.entries(data)) {
            country = country.replace("_", " ");
            recordsValue.push({ content: country, pairWith: capital }, { content: capital, pairWith: country });

        }
        this.records.set(recordsValue.sort(() => Math.random() - 0.5))
    }
    onClick(record: CountryCapitalRecord) {
        const selectedRecord = this.selected();
        if (!selectedRecord) {
            this.selected.set(record);
            this.wrongPair.set({})
            return
        }
        if (selectedRecord.content === record.pairWith) {
            this.records.update(list => list.filter(item => ![record.content, record.pairWith].includes(item.content)));
        }
        else {
            this.wrongPair.set({
                [selectedRecord.content]: true,
                [record.content]: true
            });
        }
        this.selected.set(null);

    }

}