class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.datetime :expire_date
      t.boolean :is_done

      t.timestamps
    end
  end
end
