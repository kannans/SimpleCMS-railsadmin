class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :decription
      t.string :duration
      t.string :care_by

      t.timestamps
    end
  end
end
