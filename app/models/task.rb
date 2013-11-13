class Task < ActiveRecord::Base
  attr_accessible :description, :expire_date, :is_done, :title
end
